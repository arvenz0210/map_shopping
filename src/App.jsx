import React, { Component, PropTypes} from 'react';
import Header from './components/assets/header/headerContainer'
class App extends Component {
  render(){
    return(
      <div style={{backgroundColor: 'rgb(233,235,238)'}}>
        <Header/>
        {this.props.children}

      </div>
    );
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
};

export default App;
//rgb(244,247,246) rgb(233,235,238) rgb(174,180,180)
