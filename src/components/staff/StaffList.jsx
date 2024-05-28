import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService.jsx"
import { User } from "../../users/User.jsx"
import "./Staff.css"
import { Link } from "react-router-dom"

export const StaffList = () => {
    const [staffUsers, setStaffUsers] = useState([])

    useEffect(() => {
        getAllEmployees().then(staffArray => {
            setStaffUsers(staffArray)
        })
    }, [])

    return (
        <div className="employees">
            {staffUsers.map((staffObj) => {
                return (
                    <Link to={`/employees/${staffObj.id}`} key={staffObj.id}>
                        <User user={staffObj.user} />
                    </Link>
                )
            })}
        </div>
    )
}
