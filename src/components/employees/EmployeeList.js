import React, { useState, useEffect } from "react"; 

const api = "http://localhost:8088"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [specialties, setSpecialty] = useState("")

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
            Specialties: { specialties }
        </div>
        {
            employees.map(
                (e) => {
                    return <h2 key={`customer--${e.id}`}>{e.name}</h2>
                }
            )
        }
        </>
    )
}