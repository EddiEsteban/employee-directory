import React, {useState, useEffect} from "react"





function Navbar() {
    const [search, setSearch] = useState('')

    function handleInputChange( event ){
        const { name, value } = event.target

        console.log(name, value)

        if( name==='search' ) {
            setSearch( value )
        }
    }

    function handleSearch(event){
        event.preventDefault()
    }


    return (<div>
        <nav className="navbar navbar-dark bg-dark">
            <p className='navbar-brand'>Employee Directory</p>
            <form className="form-inline my-2 my-lg-0">  
                <select class="form-control mr-1">
                    <option>First Name</option>
                    <option>Last Name</option>
                    <option>Twitter Handle</option>
                    <option>Email Address</option>
                    <option>Phone Number</option>
                </select>
                <input className="form-control mr-sm-2" type="search" placeholder="Try 'John Smith'" name='search' value={search} onChange={handleInputChange}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSearch}>Search</button>
            </form>
        </nav>
    </div>)
}

export default Navbar
