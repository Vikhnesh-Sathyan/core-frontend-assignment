function EmployeeCard({ name, role }) {
  return (
    <div className="employee-card">
      <div className="avatar-circle"></div>

      <div className="employee-info">
        <h3 className="employee-name">{name}</h3>
        <p className="employee-role">{role}</p>
      </div>
    </div>
  )
}

export default EmployeeCard