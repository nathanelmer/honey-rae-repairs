import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
    const [employee, newEmployee] = useState({
        name: "",
        specialty: ""
    })

    const history = useHistory()

    const addEmployee = (event) => {
        
            event.preventDefault()
            const newEmployee = {
                name: employee.name,
                specialty: employee.specialty,
            }
            
            const fetchOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEmployee)
        }

        fetch("http://localhost:8088/employees", fetchOptions)
            .then(() => {
                history.push("/employees")
            })
    }
    


    return (
            <form className="ticketForm">
                <h2 className="ticketForm__title">New Employee Registration</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                      <input 
                         required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={(e) => {
                            const copy = {...employee}
                            copy.name = e.target.value
                            return newEmployee(copy)
                        }}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialties">Specialties:</label>
                    <input 
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Technical Specialties"
                    onChange={(e) => {
                        const copy = {...employee}
                        copy.specialty = e.target.value
                        return newEmployee(copy)
                    }}/>
                    
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={ addEmployee }>Hire Employee</button>
            </form>
    )
}
