import React, {useState, useEffect} from 'react'
import employees from '../employees'
import SorterHeader from './SorterHeader'
import sortArray from 'sort-array'

const TableResults = ()=>{
    let semployees = sortArray(employees, {by: 'firstName', order:'asc'})
    return (<>
        <table className="table table-dark table-striped">
        <thead>
            <tr>
    <th scope="col"><SorterHeader data={employees}>ID</SorterHeader></th>
            <th scope="col"><SorterHeader data={employees}>First Name</SorterHeader></th>
            <th scope="col"><SorterHeader data={employees}>Last Name</SorterHeader></th>
            <th scope="col"><SorterHeader data={employees}>Twitter Handle</SorterHeader></th>
            <th scope='col'><SorterHeader data={employees}>Email Address</SorterHeader></th>
            <th scope='col'><SorterHeader data={employees}>Phone Number</SorterHeader></th>
            </tr>
        </thead>
        <tbody>
            {semployees.map(employee=>
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