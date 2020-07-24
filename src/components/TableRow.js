import React from 'react'

function TableRow(props){
    return(<>
    <tr>
    <th scope="row">{props.data.id}</th>
    <td>{props.data.firstName}</td>
    <td>{props.data.lastName}</td>
    <td>{props.data.twitter}</td>
    <td>{props.data.email}</td>
    <td>{props.data.phone}</td>
    </tr>
    </>)
}

export default TableRow