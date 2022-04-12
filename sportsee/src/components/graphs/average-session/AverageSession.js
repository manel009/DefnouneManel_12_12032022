import React, {useState} from "react";
import UserActivityService from '../../../services/UserActivityService.js';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';



export default function AverageSession(props){
    const [userData, setUserData] = useState(null);

    const preprareGraphData = function(data){
        let valueArray = data.data.sessions;
        console.log(data.data.sessions)
        let prepareData = [];
        for(let value of valueArray){
            let graphPoint = {};
            graphPoint.sessionLength = value.sessionLength;
            switch(value.day) {
                case 1:
                    graphPoint.day = 'L';
                  break;
                case 2:
                case 3:
                    graphPoint.day = 'M';
                  break;
                case 4:
                    graphPoint.day = 'J';
                    break;
                case 5:
                    graphPoint.day = 'V';
                    break;
                case 6:
                    graphPoint.day = 'S';
                    break;
                case 7:
                    graphPoint.day = 'D';
                    break;
                default:
                    graphPoint.day = 'X';
              }
            prepareData.push(graphPoint);
        }
        return prepareData;
    }

    if(userData === null){
        UserActivityService.getUserAverageSession(props.idUser).then(
            data => {
                setUserData(preprareGraphData(data));
            }
        )
    }

    return (
        <>
            { userData != null ?
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userData}
                margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="day" stroke="#ffffff">
                        <Label value="Durée moyenne des sessions" position="insideTop" fillOpactity={0.5} offset={-170} style={{ color: 'white', fill: 'white' }} />
                    </XAxis>
                    <Tooltip />
                    <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" />
                </LineChart>
                </ResponsiveContainer>
            :
             <h1> Loading ... </h1>
            }
            
        </>
       
    );
}