import React, {useState} from "react";
import UserActivityService from '../../../services/UserActivityService.js';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';



export default function AverageSession(props){
    const [userData, setUserData] = useState(null);

    if(userData === null){
        UserActivityService.getUserAverageSession(props.idUser).then(
            data => {
                setUserData(data);
            }
        )
    }

    return (
        <>
            { userData != null ?
                <LineChart width={730} height={250} data={userData.data.sessions}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
                </LineChart>
            :
             <h1> Loading ... </h1>
            }
            
        </>
       
    );
}