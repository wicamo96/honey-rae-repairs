import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSelectedEmployee } from "../../services/employeeService.jsx"

export const StaffDetails = () => {
    const [staff, setStaff] = useState({})
    // const [ticketCount, setTicketCount] = useState(0)
    const { employeeId } = useParams()

    console.log(staff)

    useEffect(() => {
        getSelectedEmployee(employeeId).then(data => {
            const employeeObj = data
            console.log(employeeObj)
            setStaff(employeeObj)
        })
    }, [])


    return (
        <section className="employee">
            <header className="employee-header">{staff.user?.fullName}</header>
            <div>
                <span className="employee-info">Email : </span>
                {staff.user?.email}
            </div>
            <div>
                <span className="employee-info">Address : </span>
                {staff?.specialty}
            </div>
            <div>
                <span className="employee-info">Rate : </span>
                {staff?.rate}
            </div>
            <div>
                <span className="employee-footer">Currently working on {staff.employeeTickets?.length} tickets</span>
            </div>
        </section>
    )
}
