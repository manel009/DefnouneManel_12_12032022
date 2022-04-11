import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';



export default function Score(props){

    let dataScore = [];
    let data = {};
    data.pv = 1;
    data.uv = props.score;
    data.name = "Score";
    data.fill = "#8884d8";
    dataScore.push(data);
    console.log(dataScore)

    return (
        <>
            { props.score != null ?
                <RadialBarChart
                width={500}
                height={300}
                cx={150}
                cy={150}
                innerRadius={100}
                outerRadius={140}
                barSize={10}
                data={dataScore}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 1]}
                  angleAxisId={0}
                  tick={false}
                />
                <RadialBar
                  minAngle={20}
                  label={{ position: "insideStart", fill: "#0000" }}
                  dataKey="uv"
                  angleAxisId={0}
                  background
                  clockWise
                />
              </RadialBarChart>
            :
             <h1> Loading ... </h1>
            }
            
        </>
       
    );
}