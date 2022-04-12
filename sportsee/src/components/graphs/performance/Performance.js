import React, {useState} from "react";
import UserActivityService from '../../../services/UserActivityService.js';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


export default function Performance(props){
    const [userData, setUserData] = useState(null);

    const preprareGraphData = function(data){
        let valueArray = data.data.data;
        let prepareData = [];
        for(let value of valueArray){
            let graphPoint = {};
            graphPoint.value = value.value;
            graphPoint.kind = data.data.kind[value.kind];
            prepareData.push(graphPoint);
        }
        return prepareData;
    }

    if(userData === null){
        UserActivityService.getUserPerformance(props.idUser).then(
            data => {
                setUserData(preprareGraphData(data));
            }
        )
    }

    return (
        <>
            { userData != null ?
            <ResponsiveContainer width="100%" height="100%" >
                <RadarChart data={userData} cx="50%" cy="50%" outerRadius="35%">
                <PolarGrid/>
                
                <Radar
                  name="Performance"
                  dataKey="value"
                  stroke="#E60000"
                  fill="#E60000"
                  fillOpacity={0.6}
                />
                <PolarAngleAxis dataKey="kind" stroke="#ffffff" width={50}/>
              </RadarChart>
              </ResponsiveContainer>
            :
             <h1> Loading ... </h1>
            }
            
        </>
       
    );
}