import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../../input';
import Snackbar from '../../../snackbar';
import Loading from '../../../loading';

import Button from "@material-ui/core/Button";

import Login from '../../../../services/login';
import './style.css';

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      newPassword: '',
      newPasswordR: '',
      loading: false,
      snackbar: false,
      snackbarStatus: 'success',
      snackbarMsj: '',
    };
    this.textInput = React.createRef();

    this.handlePassword = this.handlePassword.bind(this);
    this.handleNewPassword = this.handleNewPassword.bind(this);
    this.handleNewPasswordR = this.handleNewPasswordR.bind(this);
    this.saveData = this.saveData.bind(this);
    this.snackbarClose = this.snackbarClose.bind(this);
  }

  handlePassword(e) {
    this.setState({
      password: e,
    });
  }

  handleNewPassword(e) {
    this.setState({
      newPassword: e,
    });
  }

  handleNewPasswordR(e) {
    this.setState({
      newPasswordR: e,
    });
  }

  snackbarClose() {
    this.setState({
      snackbar: false,
    });
  }

  saveData(){
    this.setState({
      loading: true,
    });

    Login.changePassword({
      password: this.state.password,
      newPassword: this.state.newPassword,
      newPasswordR: this.state.newPasswordR,
    }).then(res => {
      if (res.data.responseCode == 0) {
        window.location.replace('/api/logout');
      } else {
        this.setState({
          loading: false,
          snackbar: true,
          snackbarMsj: res.data.responseMessage || 'No tuvimos respuesta, reintenta más tarde',
          snackbarStatus: 'error',
        });
      }

    }).catch(err => {
      this.setState({
        loading: false,
        snackbar: true,
        snackbarMsj: 'No tuvimos respuesta, reintenta más tarde',
        snackbarStatus: 'error',
      });
    });

  }

  componentDidMount() {
    // if (this.textInput) {
    //   console.log(this.textInput.current);
    // }
    // if(window && this.textInput) {
    //   window.pepe = this.textInput.current;
    // }
  }

  render() {
    return (
      <div className="change-password">
        <h2> Cambio de contraseña</h2>
        <Input
            title="Contraseña actual"
            value={this.state.password}
            action={this.handlePassword}
            type="password"
            ref={this.textInput}
          />
        <Input
          title="Nueva contraseña"
          value={this.state.newPassword}
          action={this.handleNewPassword}
          type="password"
        />
        <Input
          title="Rescribir contraseña"
          value={this.state.newPasswordR}
          action={this.handleNewPasswordR}
          type="password"
        />
        <p className="actions">
          <Button 
            variant="contained"
            color="primary"
            onClick={this.saveData}
            disabled={!(
              this.state.password && this.state.newPassword && this.state.newPasswordR
              && this.state.newPassword == this.state.newPasswordR
              )}>
              Guardar
          </Button>
        </p>
        { this.state.loading && <Loading /> }
        <Snackbar open={this.state.snackbar} variant={this.state.snackbarStatus} message={this.state.snackbarMsj} close={this.snackbarClose}/>
      </div>
    );
  }

}

export default ChangePassword;

