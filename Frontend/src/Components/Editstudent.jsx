import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import API_URL from '../../API_URL'
const Editstudent = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const data = location.state

    const [name, setName] = useState(data.name)
    const [age, setAge] = useState(data.age)
    const [course, setCourse] = useState(data.course)
    const [status, setStatus] = useState(data.status)
    const [loading, setloading] = useState(false)

    const updateData = async () => {

        try {

            await axios.put(`${API_URL}/update/${data._id}`, {
                name,
                age,
                course,
                status
            })
            setloading(true)
            setTimeout(() => {
                alert("Record Updated")
                navigate("/frontpage")
            }, 2000);

            


        } catch (err) {
            console.log(err)
            setloading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F5F7FB] px-4">

            <div className="w-full max-w-xl border border-blue-200 rounded-2xl shadow-sm bg-white">

                <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-t-2xl p-4 text-center font-semibold text-lg">
                    Update Student
                </div>


                <div className="p-6">


                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Name :</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Age :</label>
                        <input
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            type="number"
                            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Course :</label>
                        <input
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            type="text"
                            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>


                    <div className="mb-6">
                        <label className="block text-sm text-gray-700 mb-1">Status :</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
                        >
                            <option>Completed</option>
                            <option>Ongoing</option>
                        </select>
                    </div>


                    <button
                        onClick={updateData}
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 rounded-lg font-medium hover:opacity-90 transition"
                    >
                        {loading ? "Updating" : "Update Student"}
                    </button>

                </div>
            </div>
        </div>
    )
}
export default Editstudent