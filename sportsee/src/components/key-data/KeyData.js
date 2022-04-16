import React from "react";
import './KeyData.css';

/**
 * KeyData component : display calories, proteins, carbs and fat cards section in the dashboard.
 * @param {*} props 
 * @returns 
 */
export default function KeyData(props){
    return (
        <div className="dashboardKeyData">
            <div className="keyDataCard">
                <img src="./img/calories-icon.png" alt="calories"></img>
                <div className="keyDataText">
                    <h3 className="keyDataTitle">{props.keyData.calorieCount}kCal</h3>
                <p>Calories</p>
                </div>
                
            </div>
            <div className="keyDataCard">
                <img src="./img/protein-icon.png" alt="proteins"></img>
                <div className="keyDataText">
                    <h3 className="keyDataTitle">{props.keyData.proteinCount}g</h3>
                    <p>Proteines</p>
                </div>
            </div>
            <div className="keyDataCard">
                <img src="./img/carbs-icon.png" alt="carbs"></img>
                <div className="keyDataText">
                <h3 className="keyDataTitle">{props.keyData.carbohydrateCount}g</h3>
                <p>Glucides</p>
                </div>
            </div>
            <div className="keyDataCard">
                <img src="./img/fat-icon.png" alt="fat"></img>
                <div className="keyDataText">
                <h3 className="keyDataTitle">{props.keyData.lipidCount}g</h3>
                <p>Lipides</p>
                </div>
            </div>
        </div>
    );
}