import React, {useState} from "react";
import { useParams } from "react-router-dom";
import './Home.css';
import UserActivityService from '../../services/UserActivityService.js';
import KeyData from "../key-data/KeyData";
import AverageSession from "../graphs/average-session/AverageSession";
import Perfomance from "../graphs/performance/Performance";
import Score from "../graphs/score/Score";
import Activity from "../graphs/activity/Activity";

/**
 * Home Component : get user data from the service and then display the dashboard with all informations.
 * @returns Home component
 */
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
                            <div className="graphActivity">
                                <h3>Activité quotidienne</h3>
                                <Activity idUser={params.idUser}></Activity>
                            </div>
                            <div className="secondLineGraphs">
                                <div className="graphAverage">
                                    <AverageSession idUser={params.idUser}></AverageSession>
                                </div>
                                <div className="graphPerformance">
                                    <Perfomance idUser={params.idUser}></Perfomance>
                                </div>
                                <div className="graphScore">
                                    <h3>Score</h3>
                                    <h4> {userData.data.todayScore * 100}% </h4>
                                    <p> de votre objectif</p>
                                    <Score score={userData.data.todayScore}></Score>
                                </div>
                            </div>
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