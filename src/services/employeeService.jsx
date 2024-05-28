export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=user").then((res) => res.json())
}


//http://localhost:8088/employees/2?_expand=user&_embed=employeeTickets
export const getSelectedEmployee = (taco) => {
    return fetch(`http://localhost:8088/employees/${taco}?_expand=user&_embed=employeeTickets`).then(res => res.json())
}

export const getEmployeeTickets = () => {
    return fetch("http://localhost:8088/employeeTickets").then(res => res.json())
}

export const getEmployeeByUserId = (userId) => {
    return fetch(`http://localhost:8088/employees?_expand=user&_embed=employeeTickets&userId=${userId}`).then((res) => res.json())
}

export const updateEmployee = (employee) => {
    return fetch(`http://localhost:8088/employees/${employee.id}`, {
        method: "PUT",
        headers: {
            "content-Type": "application/json"
,        },
        body: JSON.stringify(employee)
    })
}