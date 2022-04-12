import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';



export default function Score(props){

    let dataScore = [];
    let data = {};
    data.pv = 1;
    data.uv = props.score;
    data.name = "Score";
    data.fill = "#E60000";
    dataScore.push(data);
    console.log(dataScore)

    return (
        <>
            { props.score != null ?
             <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={110}
                barSize={10}
                data={dataScore}
                startAngle={90} 
                endAngle={450}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 1]}
                  angleAxisId={0}
                  tick={false}
                />
                <RadialBar
                  dataKey="uv"
                  angleAxisId={0}
                  background
                  clockWise="false"
                />
              </RadialBarChart>
              </ResponsiveContainer>
            :
             <h1> Loading ... </h1>
            }
            
        </>
       
    );
}