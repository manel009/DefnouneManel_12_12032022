import React, {useState} from "react";
import UserActivityService from '../../../services/UserActivityService.js';
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';



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
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userData.data.sessions}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="day" stroke="#ffffff" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" />
                </LineChart>
                </ResponsiveContainer>
            :
             <h1> Loading ... </h1>
            }
            
        </>
       
    );
}