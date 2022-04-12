import React, {useState} from "react";
import UserActivityService from '../../../services/UserActivityService.js';
import './Activity.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';




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
                isAnimationActive={false}
                margin={{
                  top: 10,
                  right: 10,
                  left: 10,
                  bottom: 15,
                }}
              >
                <XAxis dataKey="day" fontSize={10}>
                    <Label value="Activité quotidienne" position="insideTop" offset={-155} />
                </XAxis>
                <YAxis fontSize={10} orientation="right"> 
                </YAxis>
                <Tooltip />
                <Legend verticalAlign="top" align="right" height={50} iconType="circle" />
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