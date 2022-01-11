import React, { useState, useEffect } from "react"; 

const api = "http://localhost:8088"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])

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
        {
            tickets.map(
                (t) => {
                    return <div key={`ticket--${t.id}`}>
                        <p>{t.customer.name} says {t.description} and {t.employee.name} worked on it.</p>
                        </div>
                }
            )
        }
        </>
    )
}