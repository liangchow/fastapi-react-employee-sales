import { useEffect, useState } from 'react'
import type { Employee } from './types/employee'
import { fetchEmployees } from './api/employeeAPI'
import './App.css'


function App() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadEmployees(){
      try {
        const data = await fetchEmployees()
        setEmployees(data)
      } catch {
        setError("Unable to load employee data.")
        console.log(error)
      }
    }
    loadEmployees()
  }, [])
  
  return (
    <div className='app-container'>
      <h1 className='app-header'>
        React App: Employee Sales Data
      </h1>
      {error && <p>{error}</p>}
      <table className='employee-table'>
        <thead>
          <tr>
            <th>Employeed ID</th>
            <th>Employee Name</th>
            <th>Employee Sales ($)</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            <tr key={emp.employee_id}>
              <td>{emp.employee_id}</td>
              <td>{emp.employee_name}</td>
              <td>${emp.total_sales.toLocaleString()}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App
