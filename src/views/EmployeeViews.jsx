import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar.jsx"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { TicketList } from "../components/tickets/TicketList.jsx"
import { StaffList } from "../components/staff/StaffList.jsx"
import { StaffDetails } from "../components/staff/StaffDetails.jsx"
import { CustomerList } from "../components/customers/CustomersList.jsx"
import { CustomerDetails } from "../components/customers/CustomerDetails.jsx"
import { EmployeeForm } from "../components/forms/EmployeeForms.jsx"

export const EmployeeViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route
                path="/" 
                element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome />} />
                <Route path="tickets" element={<TicketList currentUser={currentUser}/>} />
                <Route path="employees">
                    <Route index element={<StaffList />} />
                    <Route path=":employeeId" element={<StaffDetails />} />
                </Route>
                <Route path="customers">
                    <Route index element={<CustomerList />} />
                    <Route path=":customerId" element={<CustomerDetails />} />
                </Route>
                <Route path="profile" element={<EmployeeForm currentUser={currentUser} />} />
            </Route>
        </Routes>
    )
}