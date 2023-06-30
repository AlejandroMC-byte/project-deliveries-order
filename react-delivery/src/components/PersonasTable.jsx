import React, { Component } from "react";
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import Header from "./Header";
import UserService from "../service/UserService";
import {Panel} from 'primereact/panel';
import {Menubar} from 'primereact/menubar';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Toast} from 'primereact/toast';
import 'primereact/resources/themes/nova/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
// const cookies = new Cookies();
// let data = [];
class PersonasTable extends Component{
    constructor(){
        super();
        this.state = {
            visible : false,
            user: {
                login: '',
                password: '',
                direccion: '',
                correo : '',
                id_perfil : 0,
                telefono : 0
            },
            selectedUser : {
      
            }
          };
          this.items = [
            {
              label : 'Nuevo',
              icon  : 'pi pi-fw pi-plus',
              command : () => {this.showSaveDialog()}
            },
            {
              label : 'Editar',
              icon  : 'pi pi-fw pi-pencil',
              command : () => {this.showEditDialog()}
            },
            {
              label : 'Eliminar',
              icon  : 'pi pi-fw pi-trash',
              command : () => {this.delete()}
            }
          ];
          this.UserService = new UserService();
          this.save = this.save.bind(this);
          this.delete = this.delete.bind(this);
          this.footer = (
            <div>
              <Button label="Guardar" icon="pi pi-check" onClick={this.save} />
            </div>
          );
        }
      
    
    componentDidMount(){
        this.UserService.getAll().then(data => this.setState({users: data}))
    }

    save() {
        this.UserService.save(this.state.user).then(data => {
          this.setState({
            visible : false,
            user: {
                login: '',
            	password: '',
                direccion: '',
                correo : '',
                id_perfil : 0,
                telefono : 0
            }
          });
          alert('Se guardó el registro correctamente.') 
          this.UserService.getAll().then(data => this.setState({users: data}))
        })
      }
    
      delete() {
        if(window.confirm("¿Realmente desea eliminar el registro?")) {
          this.UserService.delete(this.state.selectedUser.id).then(data => {
            alert('Se eliminó el registro correctamente.') 
            this.UserService.getAll().then(data => this.setState({users: data}));
          });
        }
      }

    

render(){
        return(
            <>
                <Header/>
                <div style={{width:'80%', margin: '0 auto', marginTop: '20px'}}>
                    <Menubar model={this.items}/>
                    <br/>
                    <Panel header="React CRUD App">
                        <DataTable value={this.state.users} paginator={true} rows="6" selectionMode="single" selection={this.state.selectedUser} onSelectionChange={e => this.setState({selectedUser: e.value})}>
                        <Column field="id" header="ID"></Column>
                        <Column field="login" header="Login"></Column>
                        <Column field="direccion" header="Direccion"></Column>
                        <Column field="correo" header="Correo"></Column>
                        <Column field="telefono" header="Telefono"></Column>
                        </DataTable>
                    </Panel>
                    <Dialog header="Crear user" visible={this.state.visible} style={{width: '400px'}} footer={this.footer} modal={true} onHide={() => this.setState({visible: false})}>
                    <form id="user-form">
                        <span className="p-float-label">
                            <InputText value={this.state.user.login} style={{width : '100%'}} id="login" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let user = Object.assign({}, prevState.user);
                                    user.login = val;

                                    return { user };
                                })}
                            } />
                            <label htmlFor="login">User</label>
                        </span>
                        <br/>
                        <span className="p-float-label">
                            <InputText value={this.state.user.password} style={{width : '100%'}} id="password" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let user = Object.assign({}, prevState.user);
                                    user.password = val

                                    return { user };
                                })}
                            } />
                            <label htmlFor="password">Password</label>
                        </span>
                        <br/>
                        <span className="p-float-label">
                            <InputText value={this.state.user.direccion} style={{width : '100%'}} id="direccion" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let user = Object.assign({}, prevState.user);
                                    user.direccion = val

                                    return { user };
                                })}
                            } />
                            <label htmlFor="direccion">Dirección</label>
                        </span>
                        <br/>
                        <span className="p-float-label">
                            <InputText value={this.state.user.correo} style={{width : '100%'}} id="correo" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let user = Object.assign({}, prevState.user);
                                    user.correo = val

                                    return { user };
                                })}
                            } />
                            <label htmlFor="correo">Correo</label>
                        </span>
                        <br/>
                        <span className="p-float-label">
                            <InputText value={this.state.user.id_perfil} style={{width : '100%'}} id="id_perfil" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let user = Object.assign({}, prevState.user);
                                    user.id_perfil = val

                                    return { user };
                                })}
                            } />
                            <label htmlFor="id_perfil">Tipo perfil</label>
                        </span>
                        <br/>
                        <span className="p-float-label">
                            <InputText value={this.state.user.telefono} style={{width : '100%'}} id="telefono" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let user = Object.assign({}, prevState.user);
                                    user.telefono = val

                                    return { user };
                                })}
                            } />
                            <label htmlFor="telefono">Teléfono</label>
                        </span>
                        </form>
                    </Dialog>    
                </div>
            </>
        );
}

  showSaveDialog(){
    this.setState({
      visible : true,
      user : {

        login: '',
        password: '',
        direccion: '',
        correo : '',
        id_perfil : 0,
        telefono : 0
      }
    });
  }

  showEditDialog() {
    this.setState({
      visible : true,
      user : {
        id: this.state.selectedUser.id,
        login: this.state.selectedUser.login,
        password: this.state.selectedUser.password,
        direccion: this.state.selectedUser.direccion,
        correo: this.state.selectedUser.correo,
        id_perfil: this.state.selectedUser.id_perfil,
        telefono : this.state.selectedUser.telefono
      }
    })
  }
}
export default PersonasTable