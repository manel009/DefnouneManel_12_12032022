import React, {useState} from "react";
import UserActivityService from '../../../services/UserActivityService.js';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


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
                <RadarChart
                cx={300}
                cy={250}
                outerRadius={150}
                width={500}
                height={500}
                data={userData}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <PolarRadiusAxis />
                <Radar
                  name="Mike"
                  dataKey="value"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
              </RadarChart>
            :
             <h1> Loading ... </h1>
            }
            
        </>
       
    );
}