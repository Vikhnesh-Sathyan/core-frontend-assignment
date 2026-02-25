import {
  Home,
  User,
  Users,
  Briefcase,
  UserPlus,
  BarChart3,
  Settings,
  ChevronRight
} from "lucide-react"


function Sidebar() {
  return (
    <div className="sidebar">
      
      <div>
        <h2 className="workspace-title">Workspace</h2>

        <ul className="sidebar-menu">
          <li className="menu-item active">
            <Home size={20} strokeWidth={1.5} />
            <span>Home</span>
          </li>

          <li className="menu-item">
            <User size={20} strokeWidth={1.5} />
            <span>My Info</span>
            
            <ChevronRight className="menu-arrow" />
          </li>

          <li className="menu-item">
            <Users size={20} strokeWidth={1.5} />
            <span>People</span>
          </li>

          <li className="menu-item">
            <Briefcase size={20} strokeWidth={1.5} />
            <span>Team Management</span>
          </li>

          <li className="menu-item">
            <UserPlus size={20} strokeWidth={1.5} />
            <span>Hiring</span>
          </li>

          <li className="menu-item">
            <BarChart3 size={20} strokeWidth={1.5} />
            <span>Report</span>
          </li>
        </ul>
      </div>

      {/* Bottom Settings */}
     <div className="sidebar-bottom">
    <div className="settings-item">
        <Settings size={20} strokeWidth={1.5} />
    <span>Settings</span>
  </div>
</div>

    </div>
  )
}

export default Sidebar