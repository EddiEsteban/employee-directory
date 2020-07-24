import React, {useState, useEffect} from 'react'
import sortArray from 'sort-array'
// import employeesJSON from '../employees'

const SorterHeader = props=>{
    // ▽sortFocus === true ? (sortDesc = true ? '▼' : '▲') : '▽'

    let symbol = '▽'

    // const handleSort = (event) => {
    //     console.log()
    //     props.handleSort
    // }
    if (props.sortFocus === props.header) {
        if (props.isAsc) {symbol = '▼'} else {symbol = '▲'}
    } else {symbol = '▽'}

    return(<>
    {props.header} <button type='button' className={'btn btn-sm'} onClick={props.handleSort} data-focus={props.sortFocus} data-id={props.header} data-asc={props.isAsc}>{symbol}</button>
    </>)
}

export default SorterHeader