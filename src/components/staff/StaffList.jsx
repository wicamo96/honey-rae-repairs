import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/staffUserService.jsx"
import { User } from "../../users/User.jsx"
import "./Staff.css"

export const StaffList = () => {
    const [staffUsers, setStaffUsers] = useState([])

    useEffect(() => {
        getStaffUsers().then(staffArray => {
            setStaffUsers(staffArray)
        })
    }, [])

    return (
        <div className="employees">
            {staffUsers.map((staffObj) => {
                return (
                    <User user={staffObj} key={staffObj.id} />
                )
            })}
        </div>
    )
}
