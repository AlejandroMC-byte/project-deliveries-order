import axios from 'axios';

export default class UserService{
    baseurl="http://localhost:8080/"// url del backend funcionando
    getMensajero(){
        return axios.get(this.baseurl + "Mensajero").then(res => res.data)
    }
    getAll(){
        return axios.get(this.baseurl + "user").then(res => res.data)
    }

    save(user){
        return axios.post(this.baseurl + "user/Crear", user).then(res => res.data)
    }
    delete(id){
        return axios.post(this.baseurl + "user/Eliminar"+id).then(res => res.data)
    }

}