import React , { Component } from 'react';
import Home from './Home';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';


class App extends Component {


  render() {
    return (
      <div className="app-wrap">
        {this.state.renderNavbar?<Navbar />:<Topbar/>}
        {this.props.children}
        <div className="footer">
        </div>
      </div>
    );
  }
}
export default App;
