import React, {useState, useEffect} from 'react'
import sortArray from 'sort-array'
// import employeesJSON from '../employees'

const SorterHeader = props=>{
    // ▽sortFocus === true ? (sortDesc = true ? '▼' : '▲') : '▽'

    let [symbol, setSymbol] = useState('▽')

    // if (props.focus) {
    //     setSymbol('▼')
    // } else {setSymbol('▽')}

    return(<>
    {props.header} <button type='button' className={'btn btn-sm'} onClick={props.handleSort} focus={props.focus} data-id={props.header}>{symbol}</button>
    </>)
}

export default SorterHeader