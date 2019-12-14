import React from 'react';

import Tooltips from '../tooltips';
import Chevron from '../chevron';
import Modal from '../modal';

import ChangePassword from './components/change-password';

class header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userOpen: false,
      changePassword: props.data.hasToChangePassword,
    };

    this.listMenu = [
      { description: `Versión: ${props.data.version}` },
    ]; 

    this.listMenu.push({ description: `Clave ${props.data.keyYesterday}` });
    this.listMenu.push({ description: `Clave ${props.data.keyToday}` });
    this.listMenu.push({ description: `Rol: ${props.data.role}` });
    if (props.data  && props.data.availableOperations) {
      props.data.availableOperations.forEach((el,k) => {
        if(k == 0) {
          this.listMenu.push({ description: `Operación:` });
        } 
          this.listMenu.push({ description: `<span style="margin-left: 73px;">${el}</span>` });
      
      });
    }


    this.openUserMenu = this.openUserMenu.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.coloseModal = this.coloseModal.bind(this);
  }

  openUserMenu(){
    this.setState({
      userOpen: !this.state.userOpen,
    });
  }

  changePassword(){
    this.setState({
      changePassword: true,
    });
  }

  coloseModal(){
    this.setState({
      changePassword: false,
    });
  }
  
  render () {
    const { user } = this.props.data;
    return (
      <React.Fragment>
        <header>
          <div className="header_left">
            <div className="header_menu">
              <span className="title">ACTIVA</span>
              <span className="sub-title">{this.props.subTitle || ''}</span>
            </div>
          </div>

          <div className="header_right">
            <div className="header_user">
              <a href="/" className="menu">
                <img src={`./images/menu.svg`} className={`icon-fa icon-menu`}/>
              </a>
              <img src={`./images/user.svg`} className={`icon-fa icon-user`}/>
              <span onClick={this.openUserMenu} >
                {user || 'Usuario'} <Chevron  up={this.state.userOpen}/>
                <Tooltips open={this.state.userOpen} items={this.listMenu || []} action={(e) => {}}>
                  <p>
                    <a href="/api/logout" >
                      <img src={`./images/logout.png`} className={`icon-fa icon-logout`}/>
                      Cerrar Sessión
                    </a>
                  </p>
                  <p >
                    <a href="#" onClick={this.changePassword}>
                      <img src={`./images/change-password.png`} className={`icon-fa icon-ch-password`}/>
                      Cambio contraseña
                    </a>
                  </p>
                </Tooltips>
              </span>
            </div>
          </div>

        </header>
        <Modal close={!this.state.changePassword} actionClose={this.coloseModal}>
          { this.state.changePassword && <ChangePassword /> }
        </Modal>
    
      </React.Fragment>
    );
  }
}


export default header;