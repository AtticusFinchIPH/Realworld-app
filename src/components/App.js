import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import Home from './Home/index'

const mapStateToProps = state => ({
    appName: state.appName
})

class App extends React.Component {
    render(){
      return(
        <div>
          <Header appName={this.props.appName} />
          <Home />
        </div>
      )
    }
  }

// App.contextTypes = {
//   router: React.PropTypes.object.isRequired 
// }

export default connect(mapStateToProps, () => ({})) (App)