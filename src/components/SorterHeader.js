import React, {useState, useEffect} from 'react'
import sortArray from 'sort-array'

const SorterHeader = props=>{
    const handleSort = sortArray(props.data, {by: 'firstName', order:'asc'})
    return(<>
    {props.children} <button className={'btn-sm'} onClick={handleSort}>▽</button>
    </>)
}

export default SorterHeader