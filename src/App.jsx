import "./App.css"
import { CustomerList } from "./components/customers/CustomersList.jsx"
import { NavBar } from "./components/nav/NavBar.jsx"
import { StaffList } from "./components/staff/StaffList.jsx"
import { TicketList } from "./components/tickets/TicketList.jsx"
import { Routes, Route, Outlet } from "react-router-dom"

export const App = () => {
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
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers" element={<CustomerList />} />
      </Route>
    </Routes>
  )
}
