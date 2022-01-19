import React from "react"
import { Route } from "react-router-dom"
import { TicketList } from "./tickets/TicketList.js"
import { CustomerList } from "./customers/CustomerList.js"
import { EmployeeList } from "./employees/EmployeeList.js"
import { TicketForm } from "./tickets/TicketForm.js"
import { EmployeeForm } from "./employees/EmployeeForm.js";

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>
            <Route path="/tickets/create">
                <TicketForm />
            </Route>
        </>
    )
}