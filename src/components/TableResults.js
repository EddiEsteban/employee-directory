import React, {useState, useEffect, useContext} from 'react'
import employeesJSON from '../employees'
import SorterHeader from './SorterHeader'
import sortArray from 'sort-array'
import GlobalContext from '../GlobalContext'

const TableResults = (props)=>{
    // const {employees, setEmployees} = useContext(GlobalContext)
    let [filter, setFilter] = useState(props.filter)

    let [employees, setEmployees] = useState(employeesJSON)
    let [sortFocus, setSortFocus] = useState('')

    let fields = Object.getOwnPropertyNames(employees[0])

    // console.log(employees, fields)
    let [isAsc, setIsAsc] = useState(true) 
    console.log(isAsc)
    const handleSort = (event)=>{

        const handleSortFocus = (header) => {
            let order
            console.log('before: ', sortFocus, header, isAsc)
            if (sortFocus === header){ //check if already in focus
                console.log('in focus')
                if (isAsc === false) { setIsAsc(true); order = 'asc' } else { setIsAsc(false); order='desc'}
            } else {console.log('new focus'); setIsAsc(true); order = 'asc'}
            // isAsc ? order = 'desc' : order = 'asc'
            setSortFocus(header)
            sortArray(employees, {by: header, order})
            console.log('after: ', sortFocus, isAsc)
        }
        // ▽sortFocus === true ? (sortDesc = true ? '▼' : '▲') : '▽'
        
        let header = event.target.dataset.id  //First Name if click first name header
        handleSortFocus(header)
        
        const newEmployees = JSON.parse(JSON.stringify(employees))
        setEmployees(newEmployees)
    }

    
    return (<>
        <table className="table table-dark table-striped">
        <thead>
            <tr>
            {fields.map(header=>
            <th scope="col"><SorterHeader data={employees} handleSort={handleSort} header={header} sortFocus={sortFocus} isAsc={isAsc}/></th>
            )}
            </tr>
        </thead>
        <tbody>
            {employees.map(employee=>
            <tr>
            <th scope="row">{employee.id}</th>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.twitter}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            </tr>
            )}
            
        </tbody>
        </table>
    </>)
}

export default TableResults