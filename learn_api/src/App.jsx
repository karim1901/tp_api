import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmpolyeeList from "./employeesList"
import Create from "./create"
import Update from "./update"


function App() {


  return (
    <div className='app'>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmpolyeeList/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/Update/:id" element={<Update/>} />
      </Routes>
      </BrowserRouter>


    </div>

  )
}

export default App
