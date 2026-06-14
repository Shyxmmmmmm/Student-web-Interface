import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import API_URL from '../../API_URL'
const Signup = () => {
const navigate = useNavigate()


const [ip1, setip1] = useState('')
const [ip2, setip2] = useState('')
const [ip3, setip3] = useState('')
const [loading, setLoading] = useState(false)

const funsignup = async () => {
    try {
        console.log("Signup clicked")

        if (!ip1 || !ip2 || !ip3) {
            alert("Fill all fields")
            return
        }

        if (ip2 !== ip3) {
            alert("Passwords not match")
            return
        }

        setLoading(true)

        const res = await axios.post(
            `${API_URL}/signup`, 
            {
                username: ip1,
                password: ip2
            },
            {
                timeout: 20000
            }
        )


        if (res.data === true) {
            alert("Signup success")
            navigate('/')
        } else {
            alert("User already exists")
        }

    } catch (err) {
        console.log("FULL ERROR:", err)

        if (err.response) {
            alert("Server error: " + err.response.status)
        } else if (err.request) {
            alert("No response (backend sleeping, wait & retry)")
        } else {
            alert("Error: " + err.message)
        }
    } finally {
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
          Create Account
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

        <input
          value={ip3}
          onChange={(e) => setip3(e.target.value)}
          type="password"
          placeholder="Confirm Password"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={funsignup}
          disabled={loading}
          className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-3 rounded-md font-semibold"
        >
          {loading ? "Please wait..." : "Sign Up"}
        </button>
        <p className='text-center text-sm cursor-pointer text-blue-600 hover:text-blue-700 hover:underline duration-200'>Already Have An Account?</p>

      </div>
    </div>
  </div>
)


}

export default Signup
