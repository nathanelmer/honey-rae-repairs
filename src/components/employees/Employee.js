import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee = () => {
    const [employee, set] = useState({})  
    const { employeeId } = useParams()  

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then(set)
        },
        [ employeeId ]  
    )

    return (
        <>
            <section className="ticket">
                <h3 className="ticket__description">{employee.name}</h3>
                <div className="ticket__customer">Specialties: {employee.specialty}</div>
            </section>
        </>
    )
}