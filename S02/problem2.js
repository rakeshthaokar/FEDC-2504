function findAccess(obj) {
    let { role, department, active, experience } = obj
    return role === "admin"
        ? active
            ? experience > 5
                ? department === "IT"
                    ? "Full It Admin Access"
                    : "Full General Admin Acccess"
                : "Limited Admin Access"
            : "Admin Access Revoked"
        : role === "manager"
            ? active
                ? experience > 3
                    ? department === "Sales"
                        ? "Full Sales Manager Access"
                        : "Full Manager Access"
                    : "Limited Manager Access"
                : "Manager Access Revoked"
            : role === "user"
                ? active
                    ? department === "Support"
                        ? "Priority Support Access"
                        : "User Access"
                    : "User Access Revoked"
                : "Invalid Role"
}

let person1 = findAccess({ role: "admin", experience: 7, active: true, department: "IT" })
console.log(person1)

let person2 = findAccess({ role: "manager", experience: 4, active: true, department: "Marketing" })
console.log(person2)

let person3 = findAccess({ role: "user", experience: 2, active: true, department: "Support" })
console.log(person3)

let person4 = findAccess({ role: "admin", experience: 3, active: false, department: "Finance" })
console.log(person4)