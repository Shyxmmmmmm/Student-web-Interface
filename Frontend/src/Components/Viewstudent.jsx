import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const Viewstudent = () => {
    const navigate = useNavigate()

    const [list, setlist] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)

    


    useEffect(() => {
        setLoading(true)
        axios.get("http://localhost:3000/getdata")
            .then((res) => {
                setlist(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => setLoading(false))
    }, [])

    const funcdel = async (id) => {
        if (!window.confirm("Are you sure you want to delete?")) return

        try {
            await axios.delete(`http://localhost:3000/delete/${id}`)
            setlist(list.filter((item) => item._id !== id))
        } catch (err) {
            console.log(err)
        }
    }

    const filteredData = list.filter((item) => {
        const value = search.toLowerCase()

        return (
            item.name.toLowerCase().includes(value) ||
            item.course.toLowerCase().includes(value) ||
            item.status.toLowerCase().includes(value) ||
            item.age.toString().includes(value)
        )
    })

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#F5F7FB]">
            <div className="border border-blue-200 shadow-sm rounded-2xl w-[95%] lg:w-[70%] p-5">

                {/* Header */}
                <div className="flex justify-between items-center py-2">
                    <h1 className="text-[#121B63] font-bold text-xl">All Students</h1>

                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border pl-3 border-gray-300 w-[200px] md:w-[300px] rounded p-1"
                    />
                </div>

                {/* Table */}
                <div className="border rounded border-gray-300 p-2">
                    <table className="w-full border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-2">ID</th>
                                <th className="p-2">Name</th>
                                <th className="p-2">Age</th>
                                <th className="p-2">Course</th>
                                <th className="p-2">Status</th>
                                <th className="p-2">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="6" className="text-center p-4">
                                        Loading...
                                    </td>
                                </tr>
                            ) : filteredData.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center p-4">
                                        No Data Found
                                    </td>
                                </tr>
                            ) : (
                                filteredData.map((items, index) => (
                                    <tr key={items._id} className="text-center">
                                        <td className="p-2 font-semibold">{index + 1}</td>
                                        <td className="p-2 font-semibold">{items.name}</td>
                                        <td className="p-2 font-semibold">{items.age}</td>
                                        <td className="p-2 font-semibold">{items.course}</td>

                                        <td className="p-2 font-semibold">
                                            <span
                                                className={`inline-block px-3 py-1 rounded text-sm font-semibold ${items.status === "Completed"
                                                        ? "text-green-700 bg-green-100"
                                                        : "text-[#F2A23F] bg-orange-100"
                                                    }`}
                                            >
                                                {items.status}
                                            </span>
                                        </td>

                                        <td>
                                            <button
                                                onClick={() => navigate("/editstudent", { state: items })}
                                                className="rounded shadow p-1 text-white bg-[#3360F6]"
                                            >
                                                Update
                                            </button>

                                            <button
                                                onClick={() => funcdel(items._id)}
                                                className="rounded shadow ml-3 bg-[#DF3244] text-white p-1"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Viewstudent