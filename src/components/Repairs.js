// import React, { useEffect, useState } from 'react';
import { CustomerList } from './customers/CustomerList.js';
import { EmployeeList } from './employees/EmployeeList.js';
import { TicketList } from './tickets/TicketList.js';

const api = "http://localhost:8088"

export const Repairs = () => {
    return (
        <>
        <h1>Honey Rae's Repair Shop</h1>
        <CustomerList/>
        <h1>Employees</h1>
        <EmployeeList/>
        <h1>Tickets</h1>
        <TicketList/>
        </>
    )
}