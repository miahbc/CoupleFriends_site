import {Link} from 'react-router-dom'
import { useState } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import pic1 from '../assets/doubledate_icon2.jpeg'
// import Search from './Search'
// import ArticleTeaser from './ArticleTeaser'

// import sections from '../data/sections.json' //data
import { useEffect } from 'react'

function AppNav (){
  
    // const[searchResults, setSearchResults] = useState([])

    // useEffect(()=> {
    //     if(searchResults.length > 0){
    //         setShowArticles(false)
    //     }
    //     else{
    //         setShowArticles(true)
    //     }

    // }, [searchResults])
    
    return(
        <div>
            <Navbar> 
                <Navbar.Brand>
                    <img src={pic1} width="100px" roundedCircle/>
                </Navbar.Brand>
                <Nav >
                    <Nav.Link href='/#/' >
                        <h1>CoupleFriends</h1>
                    </Nav.Link>
                    <Nav.Link href='/#/join'>
                        <h2>Join</h2>
                    </Nav.Link>
                    <Nav.Link href='/#/dates'>
                        <h2>Dates</h2>
                    </Nav.Link>
                    <Nav.Link href='/#/view_other_couples'>
                        <h2>Find CoupleFriends!</h2>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
export default AppNav;