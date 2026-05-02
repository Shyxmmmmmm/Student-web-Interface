import {Route,Routes } from 'react-router-dom'
import Frontpage from './Components/Frontpage'
import Addstudent from './Components/Addstudent'
import Viewstudent from './Components/Viewstudent'
import Editstudent from './Components/EditStudent'
import Signup from './Components/Signup'
import Login from './Components/Login'
const App=()=>{
  return(
    <Routes>
      <Route path='/frontpage' element={<Frontpage/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/addstudent' element={<Addstudent/>}></Route>
      <Route path='/viewstudent' element={<Viewstudent/>}></Route>
      <Route path='/editstudent' element={<Editstudent/>}></Route>

    </Routes>
  )
}
export default App