import React, {useState} from "react";
import { useParams } from "react-router-dom";
import './Home.css';
import UserActivityService from '../../services/UserActivityService.js';
import KeyData from "../key-data/KeyData";
import AverageSession from "../graphs/average-session/AverageSession";
import Perfomance from "../graphs/performance/Performance";

export default function Home(){
    const [userData, setUserData] = useState(null);
    const params = useParams();

    if(userData === null){
        UserActivityService.getUser(params.idUser).then(
            data => {
                setUserData(data);
            }
        )
    }

    return (
        <>
            { userData != null ?
                <div className="dashboard">
                    <div className="dashboardHeader">
                    <h1>Bonjour <span className="userName">{userData.data.userInfos.firstName}</span></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>

                    <div className="dashboardContent">
                        <div className="dashboardGraphs">
                            <AverageSession idUser={params.idUser}></AverageSession>
                            <Perfomance idUser={params.idUser}></Perfomance>
                        </div>
                        <div className="dashboardKayDatas">
                            <KeyData keyData={userData.data.keyData}></KeyData>
                        </div>
                        
                    </div>
                </div>
            :
             <h1> Loading ... </h1>
            }
            
        </>
       
    );
}