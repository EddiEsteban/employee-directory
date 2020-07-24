import React, {useState, useEffect, useContext, useRef} from "react"
import GlobalContext from '../GlobalContext'

function Navbar(props) {

    // const searchRef = useRef()
    // const filterRef = useRef()

    
    // const handleSearch = (event)=>{
    //     event.preventDefault()
    //     let searchVal = searchRef.current.value
    //     let filterVal = filterRef.current.value
    //     if (searchVal === ''){return}

        
    //     console.log(employees)
    //     console.log('filter: ', filterRef.current.value)
    //     console.log('search: ', searchRef.current.value)
    // }

    return (<div>
        <nav className="navbar navbar-dark bg-dark">
            <p className='navbar-brand'>Employee Directory</p>
            <form className="form-inline my-2 my-lg-0">  
                <select class="form-control mr-1" ref={props.filterRef}>
                    <option value='id'>ID</option>
                    <option value='firstName'>First Name</option>
                    <option value='lastName'>Last Name</option>
                    <option value='twitter'>Twitter Handle</option>
                    <option value='email'>Email Address</option>
                    <option value='phone'>Phone Number</option>
                </select>
                <input ref={props.searchRef} className="form-control mr-sm-2" type="search" placeholder="Try 'John Smith'" name='search'/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={props.handleFilter}>Search</button>
            </form>
        </nav>
    </div>)
}

export default Navbar
