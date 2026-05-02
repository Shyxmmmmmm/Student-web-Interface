import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
const Addstudent = () => {
    const navigate = useNavigate()
    const [ip1, setip1] = useState('')
    const [ip2, setip2] = useState('')
    const [ip3, setip3] = useState('')
    const [ip4, setip4] = useState('')
    const [loading, setloading] = useState(false)


    const submit = async () => {
        setloading(true)

        if (!ip1 || !ip2 || !ip3 || !ip4) {
            setloading(false)
            alert('Fill all the inputs')
            return
        }
        const res = await axios.post("http://localhost:3000/details", {
            name: ip1,
            age: ip2,
            course: ip3,
            status: ip4
        })

        if (res.data.success === true) {
            setTimeout(() => {
                setip1('')
                setip2('')
                setip3('')
                setip4('')
                setloading(false)
                navigate("/frontpage")
            }, 2000)
        } else {
            setloading(false)
            alert("Details already Exists")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F5F7FB] px-4">
            <div className="w-full max-w-xl border border-blue-200 rounded-2xl shadow-sm bg-white">
                <div className="bg-[#02173E] text-white rounded-t-2xl p-4 text-center font-semibold text-lg">
                    Student Management System
                </div>
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-[#0B132D] mb-5">
                        Add New Student
                    </h2>

                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Name :</label>
                        <input value={ip1} onChange={(e) => { setip1(e.target.value) }}
                            type="text"
                            placeholder="Enter name"
                            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Age :</label>
                        <input value={ip2} onChange={(e) => { setip2(e.target.value) }}
                            type="number"
                            placeholder="Enter age"
                            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Course :</label>
                        <input value={ip3} onChange={(e) => { setip3(e.target.value) }}
                            type="text"
                            placeholder="Enter course"
                            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm text-gray-700 mb-1">Status :</label>
                        <select value={ip4}
                            onChange={(e) => setip4(e.target.value)} className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400">
                            <option value="">Select status</option>
                            <option>Completed</option>
                            <option>Ongoing</option>
                        </select>
                    </div>


                    <button
                        onClick={submit} disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-500 cursor-pointer to-blue-700 text-white py-2 rounded-lg font-medium hover:opacity-90 transition"
                    >
                        {loading ? 'Submitting' : 'Submit'}
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Addstudent