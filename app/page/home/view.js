import React, { Component } from "react";
import { hydrate } from "react-dom"

import Layout from '../../components/layout';
import SearchBox from '../../components/search-box';
import Benefits from '../../components/benefits';
import Counters from '../../components/counters';
import Apps from '../../components/apps';

import './style.css';
import './chunks.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <Layout layoutData={this.props.layout} >
        <section class="main">
          <SearchBox />
          <Benefits />
          <Counters />
          <Apps />
        </section>  
         
      </Layout>
    );
  }
}

if (typeof window !== 'undefined') {
  hydrate(<Home {...window.__PRELOADED_STATE__} />, document.getElementById("root"));
}


Home.defaultProps = {
};



export default Home;
