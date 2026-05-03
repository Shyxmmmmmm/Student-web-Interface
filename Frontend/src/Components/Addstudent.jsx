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
        try {
            setloading(true)

            if (!ip1 || !ip2 || !ip3 || !ip4) {
                alert('Fill all the inputs')
                setloading(false)
                return
            }

            const res = await axios.post(
                "https://student-web-interface-2.onrender.com/details",
                {
                    name: ip1,
                    age: ip2,
                    course: ip3,
                    status: ip4
                },
                {
                    timeout: 10000
                }
            )

            if (res.data.success === true) {
                navigate("/frontpage")
            } else {
                alert("Failed to add student")
            }

        } catch (err) {
            console.log(err)

            if (err.response) {
                alert("Server error: " + err.response.status)
            } else if (err.request) {
                alert("No response (backend sleeping or DB issue)")
            } else {
                alert("Error: " + err.message)
            }

        } finally {
            setloading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F5F7FB] px-4">
            <div className="w-full max-w-xl border border-blue-200 rounded-2xl shadow-sm bg-white">
                <div className="bg-[#02173E] text-white rounded-t-2xl p-4 text-center font-semibold text-lg">
                    Student Management Center
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