import React, {useState, useRef} from "react"
import Navbar from "./components/Navbar"
import TableResults from './components/TableResults'
import './style.css'
import employeesJSON from './employees'
import GlobalContext from './GlobalContext'
import filterObject from 'filter-obj'
import sortArray from 'sort-array'

function App() {
  const searchRef = useRef()
  const filterRef = useRef()

  let [employees, setEmployees] = useState(employeesJSON)
  let [filter, setFilter] = useState('')

  // const handleFilter = (event)=>{
  //   console.log(event.target.value)
  //   // filterObject(employees, (key, value)=> event.target.value)
  // }
  
  const handleFilter = (event)=>{
    event.preventDefault()
    let searchVal = searchRef.current.value
    let filterVal = filterRef.current.value
    if (searchVal === ''){setEmployees(employeesJSON); console.log(employees);return}
    // filterObject(employees, (key, value)=> event.target.value)
    let newEmployees = JSON.parse(JSON.stringify(employeesJSON.filter((item)=>String(item[filterVal]).includes(searchVal))))
    console.log(employees)
    console.log(newEmployees)
    setEmployees(newEmployees)
    console.log('filter: ', filterRef.current.value)
    console.log('search: ', searchRef.current.value)
  }

  let [sortFocus, setSortFocus] = useState('id')

  let fields = Object.getOwnPropertyNames(employeesJSON[0])

  let [isAsc, setIsAsc] = useState(true) 
  const handleSort = (event)=>{

      const handleSortFocus = (header) => {
          let order
          console.log('before: ', sortFocus, header, isAsc)
          if (sortFocus === header){ //check if already in focus
              if (isAsc === false) { setIsAsc(true); order = 'asc' } else { setIsAsc(false); order='desc'}
          } else {console.log('new focus'); setIsAsc(true); order = 'asc'}
          setSortFocus(header)
          sortArray(employees, {by: header, order})
          console.log('after: ', sortFocus, isAsc)
      }
      
      let header = event.target.dataset.id  //First Name if click first name header
      handleSortFocus(header)
      
      const newEmployees = JSON.parse(JSON.stringify(employees))
      setEmployees(newEmployees)
  }

  return (<>
  <GlobalContext.Provider value={{employees, setEmployees}}>
  <Navbar data={employees} searchRef={searchRef} filterRef={filterRef} handleFilter={handleFilter}/>
  <TableResults data={employees} handleSort={handleSort} sortFocus={sortFocus} fields={fields} isAsc={isAsc}/>
  </GlobalContext.Provider>
  </>);
}

export default App;
