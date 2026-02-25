import Sidebar from './components/sidebar'
import People from './pages/people'
import './styles/layout.css'

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-container">
        <People />
      </div>
    </div>
  )
}

export default App