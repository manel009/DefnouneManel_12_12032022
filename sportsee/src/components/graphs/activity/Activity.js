import React, {useState} from "react";
import UserActivityService from '../../../services/UserActivityService.js';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';




export default function Activity(props){
    const [userData, setUserData] = useState(null);

    if(userData === null){
        UserActivityService.getUserActivity(props.idUser).then(
            data => {
                setUserData(data.data.sessions);
            }
        )
    }

    return (
        <>
            { userData != null ?
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                data={userData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="kilogram" fill="#000000" maxBarSize={5}/>
                <Bar dataKey="calories" fill="#E60000" maxBarSize={5}/>
              </BarChart>
              </ResponsiveContainer>
            :
             <h1> Loading ... </h1>
            }
            
        </>
       
    );
}