import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API_URL from '../../API_URL'
const Login = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [ip1, setip1] = useState('')
    const [ip2, setip2] = useState('')
    const btnsignin = () => {
        navigate('/signup')
    }

    const funcbtn = async () => {
        try {
            setLoading(true)

            const res = await axios.post(
                `${API_URL}/login`,
                {
                    username: ip1,
                    password: ip2
                }
            )

            console.log("RESPONSE:", res)

            if (res.data === true) {
                setTimeout(() => {
                    navigate('/frontpage')
                }, 3000)
            } else {
                alert('Incorrect Username or Password')
                setLoading(false)
            }

        }
        catch (err) {
            console.log("ERROR:", err)
            alert("Server error or network issue")
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white w-[400px] rounded-xl shadow-lg overflow-hidden">

                {/* Header */}
                <div className="bg-blue-900 text-white text-center py-4 text-xl font-semibold">
                    Library Management System
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4">

                    <h2 className="text-center text-lg font-semibold">
                        Welcome Back 👋
                    </h2>

                    <input
                        value={ip1}
                        onChange={(e) => setip1(e.target.value)}
                        type="text"
                        placeholder="Email or Phone number"
                        className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        value={ip2}
                        onChange={(e) => setip2(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        onClick={funcbtn}
                        disabled={loading}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>

                    <p
                        onClick={() => navigate('/signup')}
                        className="text-center text-sm text-blue-600 cursor-pointer hover:underline"
                    >
                        Create an Account
                    </p>

                </div>
            </div>
        </div>
    )
}
export default Login
