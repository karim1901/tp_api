import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

function EmpolyeeList(){


    const [employees ,setEmployees] = useState([])
    const [onsearch ,setSearch] = useState('')
    

    useEffect(()=>{
        getEmployees()
    },[])


    const getEmployees = async ()=>{
        const resp = await axios.get('http://127.0.0.1:8000/api/employees')

        setEmployees(resp.data)
    }






    const deleteEmployee = async (id)=>{
        const resp = await axios.delete(`http://127.0.0.1:8000/api/employees/${id}`)
        getEmployees()


    }



    




    return(
        <div className="employees">
            <NavLink to='/create'>Add Employee</NavLink>

            {/* <a href=""></a> */}


            <input type="text"  placeholder="Search" onChange={(e)=>{setSearch(e.target.value)}} />




            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>phone</th>
                        <th>adressMail</th>
                        <th>User Name</th>
                        <th>password</th>
                        <th>actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employees
                        .filter(employee => employee.LastName.toLowerCase().includes(onsearch.toLowerCase()) )
                        .map(employee =>{
                            return <tr key={employee.id}>
                                <td>{employee.FirstName}</td>
                                <td>{employee.LastName}</td>
                                <td>{employee.Phone}</td>
                                <td>{employee.AdressMail}</td>
                                <td>{employee.UserName}</td>
                                <td>{employee.Password}</td>
                                <td>
                                    <button onClick={()=>{deleteEmployee(employee.id)}}>delete</button>
                                    <NavLink to={`/update/${employee.id}`}><button>update</button></NavLink>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


export default EmpolyeeList