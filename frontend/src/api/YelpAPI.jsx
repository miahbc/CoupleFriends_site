import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Yelpapi() {

    const [events, setEvents] = useState([])
    let navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api')
            .then((response) => {
                const apiinfo = response.data;
                setEvents(apiinfo.map((event) => event['category']))

            })
    }, []);

    console.log(events)

    // const handleClick = (assignmentId) => {
    //     console.log('handle assignment click, assignment: ', assignmentId);
    //     navigate(`/assignments/${assignmentId}`)
    // }

    return (
        <div>
            <ul>
                {events.map(({ event}) => 
                    <li >
                        Event: {event}
                    </li>
                )}
            </ul>

        </div>
    )
}



// export default Yelpapi