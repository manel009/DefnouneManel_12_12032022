import React, {useState} from "react";
import './Home.css';
import UserActivityService from '../../services/UserActivityService.js';
import KeyData from "../key-data/KeyData";

export default function Home(){
    const [userData, setUserData] = useState(null);

    if(userData === null){
        UserActivityService.getUser(18).then(
            data => {
                console.log(data);
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