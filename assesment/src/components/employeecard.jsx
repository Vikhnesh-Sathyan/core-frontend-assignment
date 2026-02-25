import { Check } from "lucide-react"

function EmployeeCard({ name, role, image }) {
  return (
    <div className="employee-card">
      
      <div className="avatar-wrapper">
        <img src={image} alt={name} className="avatar-image" />

        <div className="verified-badge">
          <Check size={14} strokeWidth={3} />
        </div>
      </div>

      <div className="employee-info">
        <h3 className="employee-name">{name}</h3>
        <p className="employee-role">{role}</p>

        <div className="status-dots">
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="dot blue"></span>
          <span className="dot red"></span>
        </div>
      </div>

    </div>
  )
}

export default EmployeeCard