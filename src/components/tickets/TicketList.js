import React, { useState, useEffect } from "react"; 
import { Link, useHistory } from "react-router-dom";
import "./Tickets.css"

const api = "http://localhost:8088"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch(`${api}/serviceTickets?_expand=customer&_expand=employee`)
                .then(res => res.json())
                .then ((data) => {
                    setTickets(data)
                })
        },
        []
    )
    return (
        <>
        <div>
            <button onClick={() => {history.push("/tickets/create")}}>Create Ticket</button>
        </div>
        {
            tickets.map(
                (ticket) => {
                    return <div key={`ticket--${ticket.id}`}>
                       <p className={ticket.emergency ? 'ticketEmergency' : 'ticket'}>
                         {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                       </p>
                        </div>
                }
            )
        }
        </>
    )
}