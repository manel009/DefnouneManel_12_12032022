import React, {useState} from "react";
import './Home.css';
import UserActivityService from '../../services/UserActivityService.js';
import { Axios } from "axios";

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
        <div className="dashboard">
            { userData != null ?
              <h1>Bonjour {userData.data.userInfos.firstName}</h1>
            :
             <h1> Loading ... </h1>
            }
            
        </div>
       
    );
}