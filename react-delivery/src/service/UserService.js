import axios from 'axios';

export default class UserService{
    baseurl="http://localhost:8080/"// url del backend funcionando
    async getMensajero(){
        const res = await axios.get(this.baseurl + "Mensajero");
        return res.data;
    }

}