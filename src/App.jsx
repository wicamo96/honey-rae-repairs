import { useEffect, useState } from "react"
import { getAllTickets } from "./services/ticketService.jsx"

export const App = () => {
  const [allTickets, setAllTickets] = useState([])

  useEffect(() => {
    getAllTickets().then(ticketsArray => {
      setAllTickets(ticketsArray)
      console.log("tickets set!")
    })
  }, [])


  return <></>
}
