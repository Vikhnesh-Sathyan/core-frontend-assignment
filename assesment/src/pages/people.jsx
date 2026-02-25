import EmployeeCard from '../components/employeecard'
import ethan from "../assets/ethan.jpg"

function People() {
  return (
    <div>
      <div className="people-header">
        <h1 className="page-title">People</h1>

        <div className="search-wrapper">
          <input 
            type="text"
            placeholder="Search"
            className="search-input"
          />
        </div>
      </div>

      <div className="card-grid">
        <EmployeeCard 
          name="Emily Baker"
          role="Marketing Manager"
        />
        <EmployeeCard 
            name="Ethan Lee"
            role="IT Specialist"
            image={ethan}
        />
        <EmployeeCard 
          name="Olivia Smith"
          role="Software Engineer"
        />
        <EmployeeCard 
          name="Noah Wilson"
          role="Sales Lead"
        />
      </div>
    </div>
  )
}

export default People