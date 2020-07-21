import React, {useState, useEffect} from 'react'
import employees from '../employees'

const TableResults = ()=>{
    return (<>
        <table className="table table-dark table-striped">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Twitter Handle</th>
            <th scope='col'>Email Address</th>
            <th scope='col'>Phone Number</th>
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