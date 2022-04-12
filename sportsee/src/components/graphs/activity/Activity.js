import React, {useState} from "react";
import UserActivityService from '../../../services/UserActivityService.js';
import './Activity.css';
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
                isAnimationActive={false}
                margin={{
                  top: 10,
                  right: 10,
                  left: 10,
                  bottom: 15,
                }}
              >
                <XAxis dataKey="day" fontSize={10}>
                </XAxis>
                <YAxis fontSize={10} orientation="right"> 
                </YAxis>
                <Tooltip
                    labelStyle={{ display: "none" }}
                    separator=""
                    contentStyle={{ backgroundColor: "#E60000"}}
                    itemStyle={{ color: "white", fontWeight:"bold", backgroundColor: "#E60000"}}
                    formatter={function(value, name) {
                        if(name === "kilogram"){
                            return [`${value} kg`,""];
                        } else {
                            return [`${value} kCal`,""];
                        }
                    }}
                    
                />
                <Legend 
                verticalAlign="top" 
                align="right" 
                iconType="circle" 
                height={50}
                wrapperStyle={{fontSize:"12px"}}
                formatter={function(value, entry) {
                    if(value === "kilogram"){
                        return `Poids (kg)`;
                    } else {
                        return "Calories brûlées (kCal)";
                    }
                }}/>
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