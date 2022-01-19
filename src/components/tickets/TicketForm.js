import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const TicketForm = () => {
    const [ticket, updateTicket] = useState({
        description: "", 
        emergency: false
    });

    let history = useHistory()
        
    const submitTicket = (event) => {
            event.preventDefault()
            const newTicket = {
                description: ticket.description,
                emergency: ticket.emergency,
                customerId: parseInt(localStorage.getItem("honey_customer")),
                employeeId: 1, 
                dateCompleted: ""
            }
            
            const fetchOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTicket)
        }

        fetch("http://localhost:8088/serviceTickets", fetchOptions)
            .then(() => {
                history.push("/tickets")
            })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        onChange={ (e) => {
                            const copy = {...ticket}
                            copy.description = e.target.value
                            return updateTicket(copy)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        onChange={(e) => {
                            const copy = {...ticket}
                            copy.emergency = e.target.checked
                            return updateTicket(copy)
                        }} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitTicket}>
                Submit Ticket
            </button>
        </form>
    )
}