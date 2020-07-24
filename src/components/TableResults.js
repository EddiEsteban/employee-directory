import React, {useState, useEffect, useContext} from 'react'
// import employeesJSON from '../employees'
import SorterHeader from './SorterHeader'
import sortArray from 'sort-array'
import GlobalContext from '../GlobalContext'

const TableResults = (props)=>{

    // let [employees, setEmployees] = useState(props.data)
    // let [sortFocus, setSortFocus] = useState('id')

    // let fields = Object.getOwnPropertyNames(employees[0])

    // let [isAsc, setIsAsc] = useState(true) 
    // const handleSort = (event)=>{

    //     const handleSortFocus = (header) => {
    //         let order
    //         console.log('before: ', sortFocus, header, isAsc)
    //         if (sortFocus === header){ //check if already in focus
    //             if (isAsc === false) { setIsAsc(true); order = 'asc' } else { setIsAsc(false); order='desc'}
    //         } else {console.log('new focus'); setIsAsc(true); order = 'asc'}
    //         setSortFocus(header)
    //         sortArray(employees, {by: header, order})
    //         console.log('after: ', sortFocus, isAsc)
    //     }
        
    //     let header = event.target.dataset.id  //First Name if click first name header
    //     handleSortFocus(header)
        
    //     const newEmployees = JSON.parse(JSON.stringify(employees))
    //     setEmployees(newEmployees)
    // }

    
    return (<>
        <table className="table table-dark table-striped">
        <thead>
            <tr>
            {props.fields.map(header=>
            <th scope="col"><SorterHeader data={props.data} handleSort={props.handleSort} header={header} sortFocus={props.sortFocus} isAsc={props.isAsc}/></th>
            )}
            </tr>
        </thead>
        <tbody>
            {props.data.map(employee=>
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