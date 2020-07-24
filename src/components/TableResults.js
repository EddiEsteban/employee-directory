import React, {useState, useContext} from 'react'
import employeesJSON from '../employees'
import SorterHeader from './SorterHeader'
import sortArray from 'sort-array'
import GlobalContext from '../GlobalContext'

const TableResults = (props)=>{
    // const {employees, setEmployees} = useContext(GlobalContext)
    let [filter, setFilter] = useState(props.filter)

    let [employees, setEmployees] = useState(employeesJSON)
    let [sortFocus, setSortFocus] = useState('')
    let [sortDesc, setSortDesc] = useState(false)


    const handleSort = (event)=>{
        // setEmployees({})
        // event.preventDefault()
        console.log(employees)

        const handleSortFocus = (property) => {
            let order = 'asc'
            if (sortFocus === property){
                console.log('already focus')
                order === 'asc' ? order = 'desc' : order = 'asc'
            }
            setSortFocus(property)
            sortArray(employees, {by: property, order})
        }

        console.log(event.target.innerHTML) // ▽sortFocus === true ? (sortDesc = true ? '▼' : '▲') : '▽'
        let header = event.target.dataset.id //First Name
        let order = 'asc'
        switch (header){
            case 'ID': handleSortFocus('id') ; break
            case 'First Name': handleSortFocus('firstName'); break
            case 'Last Name': handleSortFocus('lastName'); break
            case 'Twitter Handle': handleSortFocus('twitter'); break
            case 'Email Address': handleSortFocus('email'); break
            case 'Phone Number': handleSortFocus('phone'); break
            default: console.log('unexpected header')
        }
        const newEmployees = JSON.parse(JSON.stringify(employees))
        setEmployees(newEmployees)
    }

    
    return (<>
        <table className="table table-dark table-striped">
        <thead>
            <tr>
            {['ID','First Name', 'Last Name', 'Twitter Handle', 'Email Address', 'Phone Number'].map(header=>
            <th scope="col"><SorterHeader data={employees} handleSort={handleSort} header={header}/></th>
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