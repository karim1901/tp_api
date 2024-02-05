import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"


function Update(){
    const [employee,setEmployee]= useState({
        FirstName :'',
        LastName:'',
        Phone:'',
        AdressMail:'',
        UserName:"",
        Password:''
    })

    const {id} = useParams()


    const getEmployee = async()=>{
        const resp = await axios.get(`http://127.0.0.1:8000/api/employees/${id}`)
        setEmployee(resp.data)
        console.log(resp.data)
    }



    useEffect(()=>{
        getEmployee()
    },[])


    const updateEmployee = async ()=>{
        await axios.put(`http://127.0.0.1:8000/api/employees/${id}`,{
            FirstName :employee.FirstName,
            LastName:employee.LastName,
            Phone:employee.Phone,
            AdressMail:employee.AdressMail,
            UserName:employee.UserName,
            Password:employee.Password
        })

    }





    return (
        <div className="update">
            <form>
                <input 
                type="text" value={employee.FirstName} name="FirstName" onChange={(e)=>{setEmployee({...employee,[e.target.name]:e.target.value})}} placeholder="first name" />
                <input type="text" value={employee.LastName} name="LastName" onChange={(e)=>{setEmployee({...employee,[e.target.name]:e.target.value})}}  placeholder="last name"/>
                <input type="text" value={employee.Phone}  name="Phone" onChange={(e)=>{setEmployee({...employee,[e.target.name]:e.target.value})}} placeholder="phone"/>
                <input type="text" value={employee.AdressMail}  name="AdressMail" onChange={(e)=>{setEmployee({...employee,[e.target.name]:e.target.value})}} placeholder="adressMail"/>
                <input type="text" value={employee.UserName}  name="UserName" onChange={(e)=>{setEmployee({...employee,[e.target.name]:e.target.value})}} placeholder="user name" />
                <input type="text" value={employee.Password}  name="Password" onChange={(e)=>{setEmployee({...employee,[e.target.name]:e.target.value})}}  placeholder="password" />
                <NavLink to='/'><button type="button"  onClick={updateEmployee}>update</button></NavLink>
            </form>
        </div>
    )
}


export default Update