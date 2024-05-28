import { Route, Outlet, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar.jsx"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { StaffDetails } from "../components/staff/StaffDetails.jsx"
import { StaffList } from "../components/staff/StaffList.jsx"
import { TicketList } from "../components/tickets/TicketList.jsx"
import { CustomerList } from "../components/customers/CustomersList.jsx"
import { CustomerDetails } from "../components/customers/CustomerDetails.jsx"
import { useEffect, useState } from "react"
import { EmployeeForm } from "../components/forms/EmployeeForms.jsx"
import { EmployeeViews } from "./EmployeeViews.jsx"
import { CustomerViews } from "./CustomerViews.jsx"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    setCurrentUser(honeyUserObject)
  }, [])

  return currentUser.isStaff ? <EmployeeViews currentUser={currentUser} /> : <CustomerViews />
}
