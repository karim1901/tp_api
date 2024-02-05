import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"


function Create (){

    const [employee,setEmployee]= useState({
        FirstName :'',
        LastName:'',
        Phone:'',
        AdressMail:'',
        UserName:"",
        Password:''
    })


    const createEmployee = async ()=>{
        await axios.post('http://127.0.0.1:8000/api/employees',{
            FirstName :employee.FirstName,
            LastName:employee.LastName,
            Phone:employee.Phone,
            AdressMail:employee.AdressMail,
            UserName:employee.UserName,
            Password:employee.Password
        })

    }




    

    return (
        <div className="create">
            <form>
                <input 
                type="text" name="FirstName" onChange={(e)=>{setEmployee({...employee,[e.target.name]:e.target.value})}} placeholder="first name" />
                <input type="text" name="LastName" onChange={(e)=>{setEmployee({...employee,[e.target.name]:e.target.value})}}  placeholder="last name"/>
                <input type="text" name="Phone" onChange={(e)=>{setEmployee({...employee,[e.target.name]:e.target.value})}} placeholder="phone"/>
                <input type="text" name="AdressMail" onChange={(e)=>{setEmployee({...employee,[e.target.name]:e.target.value})}} placeholder="adressMail"/>
                <input type="text" name="UserName" onChange={(e)=>{setEmployee({...employee,[e.target.name]:e.target.value})}} placeholder="user name" />
                <input type="password" name="Password" onChange={(e)=>{setEmployee({...employee,[e.target.name]:e.target.value})}}  placeholder="password" />
                <NavLink to='/'><button type="button" onClick={createEmployee}>Create</button></NavLink>
            </form>
        </div>
    )
}


export default Create