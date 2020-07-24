import React, {useState} from "react"
import Navbar from "./components/Navbar"
import TableResults from './components/TableResults'
import './style.css'
import employeesJSON from './employees'
import GlobalContext from './GlobalContext'

function App() {
  let [employees, setEmployees] = useState(employeesJSON)
  let [filter, setFilter] = useState('')

  return (<>
  <GlobalContext.Provider value={{employees, setEmployees}}>
  <Navbar />
  <TableResults filter={filter}/>
  </GlobalContext.Provider>
  </>);
}

export default App;
