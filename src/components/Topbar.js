import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';



class Topbar extends Component {
  _getSelectedIndex() {
    return this.context.router.isActive('/home')?'HOME':
    this.context.router.isActive('/work')?'WORK':
    this.context.router.isActive('/contact')?'CONTACT':'HOME';
  }
  render(){
    return (

        <AppBar title={this._getSelectedIndex()} style={{backgroundColor:'#CDDC39'}} />
        )
  }
}
Topbar.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default Topbar;
