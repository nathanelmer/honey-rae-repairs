import React, { useEffect, useState } from "react";

const api = "http://localhost:8088"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            fetch(`${api}/customers`)
                .then(res => res.json())
                .then ((customerArray) => {
                    setCustomers(customerArray)
                })
        },
        []
    )

        useEffect(
            () => {
                if (customers.length === 1){
                    updateMessage("You have 1 customer")
                } else {
                    updateMessage(`You have ${customers.length} customers`)
                }
            },
            [customers]
        )
    return (
        <>
        <div>{totalCustomerMessage}</div>
        {
            customers.slice(0,5).map(
                (c) => {
                    return <h2 key={`customer--${c.id}`}>{c.name}</h2>
                }
            )
        }
        </>
    )
}