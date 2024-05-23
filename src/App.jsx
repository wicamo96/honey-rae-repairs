import "./App.css"
import { CustomerList } from "./components/customers/CustomersList.jsx"
import { StaffList } from "./components/staff/StaffList.jsx"
import { TicketList } from "./components/tickets/TicketList.jsx"

export const App = () => {
  return <>
    {/* <TicketList /> */}
    {/* <CustomerList /> */}
    <StaffList />
  </>
}
