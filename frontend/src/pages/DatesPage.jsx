import {useState, useEffect} from "react"
import ReactDOM from "react-dom/client"
import axios from 'axios'
// import Yelpapi from '../api/YelpAPI.jsx'


function Yelpapi() {

    const [events, setEvents] = useState([])
    const [total, setTotal] = useState([])
    // let navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api')
            .then((response) => {
                // console.log(response)
                // console.log(response.text)
                console.log(response.data.events)
                setEvents(response.data.events)
                setTotal(response.data.total)
                // const apiinfo = response.data;
                // setEvents(Object.keys(events).map(key => {
                // console.log(key)
                // console.log(events[key])
            }
            )
        }
            , []);
        // }
        // )
    // }
    // )

    // console.log(events)

    // const handleClick = (assignmentId) => {
    //     console.log('handle assignment click, assignment: ', assignmentId);
    //     navigate(`/assignments/${assignmentId}`)
    // }

    return (
        <div>
            <h1>We found {total} upcoming events near you!</h1>
            <div>
                {events.map((event) => 
                    <div >
                        <img src={event.image_url} width="200px"></img>
                        <div>
                            <h5>Event type: {event.category}</h5>
                            <h4>Date: {event.time_start}</h4>
                            <h4>{event.location.city}, {event.location.state}</h4>
                            <h2>{event.description}</h2>
                            <a href={event.event_site_url}>Get more info!</a>
                            
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}



function Dates (){
   
    return (
        <div>
            <hr/>
            <h1>CF Dates Page</h1>
            <div>
                <Yelpapi />
            </div>
        </div>
    )

}
        
           
    
    export default Dates

