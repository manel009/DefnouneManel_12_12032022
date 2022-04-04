import axios  from "axios";

const UserActivityService = {
    getUser: async function(id) {
       return axios.get("http://localhost:3000/user/"+18).then(
            (resp) => {
                return resp.data;
            }
        );
    },

};

export default UserActivityService;