import React, { Component } from "react";
import { hydrate } from "react-dom"

import Layout from '../../components/layout';
import Loading from '../../components/loading';

import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }

    this.goto = this.goto.bind(this);
  }

  goto(href) {
    this.setState({ loading: true });
    window.location.replace(href);
  }

  render() {
    const { closeToSlaDeadLineServices, slaDeadLineSurpassedServices, visitedForFirstTimeServices } = this.props.assignmentUserCaseCounters;
    return (
      <Layout layoutData={this.props.layout} >
         <div className="services-page">
            <div  className="services-box" onClick={() => this.goto('/supervision')}>
              <img src={`./images/HOME-supervision.svg`} className={`icon-fa icon-supervition`}  />
              <p className="services-box-title">SUPERVISIÓN</p>
              <p className="services-box-description">Supervisa las solicitudes activas de la plataforma. Se pueden crear, editar y cerrar solicitudes</p>
              
              <div className="data-control">
                <div className="data-control-item">
                  <img src={`./images/open-lock.svg`} className={`icon-fa open-lock`}/>
                  <span>{ this.props.supervisionUserCaseCounters.openServices}</span>
                </div>
                <div className="data-control-item">
                  <img src={`./images/visitor-flag.svg`} className={`icon-fa visitor-flag`}/>
                  <span>{this.props.supervisionUserCaseCounters.visitedForFirstTimeServices}</span>
                </div>
                <div className="data-control-item">
                  <div className="point yellow" />
                  <span>{this.props.supervisionUserCaseCounters.closeToSlaDeadLineServices}</span>
                </div>
                <div className="data-control-item">
                  <div className="point red" />
                  <span>{this.props.supervisionUserCaseCounters.slaDeadLineSurpassedServices}</span>
                </div>
              </div>

            </div>

            { this.props.hasToShowAssignmentModule &&
            <div className="services-box" onClick={() => this.goto('/assignment')}>
              <img src={`./images/HOME-asignaciones.svg`} className={`icon-fa icon-assignments`} />
              <p className="services-box-title">ASIGNACIONES</p>
              <p className="services-box-description">Asigna técnicos para las solicitudes. Solo se muestran las solicitudes abiertas, de modo de facilitar las asignación a técnicos</p>
              
              <div className="data-control">
                <div className="data-control-item">
                  <img src={`./images/visitor-flag.svg`} className={`icon-fa visitor-flag`}/>
                  <span>{visitedForFirstTimeServices}</span>
                </div>
                <div className="data-control-item">
                  <div className="point yellow" />
                  <span>{closeToSlaDeadLineServices}</span>
                </div>
                <div className="data-control-item">
                  <div className="point red" />
                  <span>{slaDeadLineSurpassedServices}</span>
                </div>
              </div>
            </div>
            }
            { this.props.hasToShowUserModule &&
              <div className="services-box" onClick={() => this.goto('/user')}>
                <img src={`./images/account_circle.svg`} className={`icon-fa icon-user`} />
                <p className="services-box-title">USUARIO</p>
                <p className="services-box-description">Alta y edición de usuarios</p>
                <div className="data-control">
                </div>
              </div>
            }

            { this.props.hasToShowUserModule &&
              <div className="services-box" onClick={() => this.goto('/stock')}>
                <img src={`./images/devices.svg`} className={`icon-fa icon-devices`} />
                <p className="services-box-title">Stock</p>
                <p className="services-box-description">Control de comercios, sims y dispositivos</p>
                <div className="data-control">
                </div>
              </div>
            }
         </div>
         { this.state.loading && <Loading /> }
      </Layout>
    );
  }
}

if (typeof window !== 'undefined') {
  hydrate(<Home {...window.__PRELOADED_STATE__} />, document.getElementById("root"));
}


Home.defaultProps = {
  assignmentUserCaseCounters: { 
    closeToSlaDeadLineServices: 1,
    slaDeadLineSurpassedServices: 1, 
    visitedForFirstTimeServices: 1,
  },
  supervisionUserCaseCounters: {
    closeToSlaDeadLineServices: 1,
    slaDeadLineSurpassedServices: 1, 
    visitedForFirstTimeServices: 1,
    openServices: 1,
  },
  hasToShowUserModule: false,
  hasToShowAssignmentModule: false,
  hasToShowIndicators: false
};



export default Home;
