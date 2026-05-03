import { useNavigate } from "react-router-dom"
import img1 from '../assets/education.png'
import img2 from '../assets/add-user.png'
import img3 from '../assets/group-users.png'

const Frontpage = () => {
    const navigate =useNavigate()
    const funcadd=()=>{
        navigate('/addstudent')
    }
    const funcview=()=>{
        navigate("/viewstudent")
    }
    return (
        <div className="flex items-center justify-center bg-[#F5F7FB] min-h-screen py-10">
            <div className="border border-blue-200 shadow-sm rounded-2xl lg:w-[40%] w-[90%]">
                <div className="bg-[#02173E] rounded-t-2xl p-3 flex justify-center items-center gap-3">
                    <img src={img1} alt="img" className="w-8 h-8" />
                    <h1 className="text-white font-semibold text-lg">Student Management Center</h1>
                </div>
                <div className="flex flex-col items-center p-7">
                    <h1 className="text-xl font-semibold text-[#0B132D] pb-3">Welcome Back!👋</h1>
                    <p className="text-base text-[#74778A]">Manage Your Students Easily</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 px-5">
                    <div onClick={funcadd} className="border border-[#CAD9FC] p-3 bg-[#ECF1FD] hover:bg-blue-100 flex flex-col cursor-pointer justify-center items-center rounded-2xl">
                        <img src={img2} alt="img" className="flex w-20  justify-center items-center"/>
                        <h1 className="text-center text-[#0B132D] font-bold mt-2">New Student</h1>
                        <p className="text-center text-[#74778A]">Add new Student <br></br>details</p>
                    </div>
                    <div onClick={funcview} className="border border-green-200 p-3 bg-[#EEF8F0] hover:bg-green-100 flex flex-col justify-center cursor-pointer items-center rounded-2xl">
                        <img src={img3} alt="img" className="flex w-20 justify-center items-center"/>
                        <h1 className="text-center text-[#0B132D] font-bold mt-2">View Student</h1>
                        <p className="text-center text-[#74778A]">View all students, <br/> update or delete</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Frontpage