import axios from 'axios';

export default class PersonaService{
    baseurl=""// url del backend funcionando
    getAll(){
        return axios.get(this.baseurl + "all").then(res => res.data);
    }
}