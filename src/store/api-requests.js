import axios from 'axios';


const api = {
    getUsers() {
        return axios({
            method: 'get',
            url: `https://api.npoint.io/907e53f016fc45c4575d`,
        })
    },

}


export default api;