import React, { useState, useEffect } from "react"; 
import { Link, useHistory } from "react-router-dom";

const api = "http://localhost:8088"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [specialties, setSpecialty] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            fetch(`${api}/employees`)
                .then(res => res.json())
                .then ((empArray) => {
                    setEmployees(empArray)
                })
        },
        []
    )

    useEffect(() => {
        const specialty = employees.map(e => e.specialty)
        setSpecialty(specialty.join(", "))
        
    },
    [employees]
    )
    return (
        <>
        <div>
            <button className="btn btn-primary" onClick={() => {history.push("/employees/create")}}>Add Employee</button>
        </div>
        <div>
            Specialties: { specialties }
        </div>
        {
            employees.map(
                (e) => {
                    return <h2 key={`customer--${e.id}`}><Link to={`/employees/${e.id}`}>{e.name}</Link></h2>
                }
            )
        }
        </>
    )
}