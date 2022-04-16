import axios  from "axios";

const UserActivityService = {
    getUser: async function(id) {
       return axios.get("http://localhost:3000/user/"+id).then(
            (resp) => {
                return resp.data;
            }
        );
    },
    getUserActivity: async function(id) {
        return axios.get("http://localhost:3000/user/"+id+"/activity").then(
             (resp) => {
                 return resp.data;
             }
         );
     },
     getUserAverageSession: async function(id) {
        return axios.get("http://localhost:3000/user/"+id+"/average-sessions").then(
             (resp) => {
                 return resp.data;
             }
         );
     },
     getUserPerformance: async function(id) {
        return axios.get("http://localhost:3000/user/"+id+"/performance").then(
             (resp) => {
                 return resp.data;
             }
         );
     },

};

/**
 * Service to call user activity API.
 */
export default UserActivityService;