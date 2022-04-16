import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer, Label } from 'recharts';


/**
 * Score component : Display the pourcentage of daily progression for a user in a circle graph using rechart library.
 * @param {*} props 
 * @returns 
 */
export default function Score(props){

    let dataScore = [];
    let data = {};
    data.pv = 1;
    data.uv = props.score;
    data.name = "Score";
    data.fill = "#E60000";
    dataScore.push(data);

    return (
        <>
            { props.score != null ?
             <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
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
                >
                  <Label value="Score" offset={0} position="outside" />
                </PolarAngleAxis>
                
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