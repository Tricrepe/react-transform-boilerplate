import React, { Component } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

class Navbar extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      value: '/home'
    }
  }
  componentWillMount(){
    this.setState({
      value: this._getSelectedIndex()
      })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      value: this._getSelectedIndex()
    })
  }
  _getSelectedIndex() {
    return this.context.router.isActive('/home')?'/home':
    this.context.router.isActive('/work')?'/work':
    this.context.router.isActive('/contact')?'/contact':'/home';
  }

  render(){
    let styles = {
      tabs: {

      },
      tab: {
        height: '80px',
        color: '#fff',
      },
      inkBar: {
        height: '4px',
        marginTop:'-4px'
      },
      container: {
        backgroundColor:'#CDDC39',

      }
    };
    return (
      <Tabs style={styles.tabs} tabItemContainerStyle={styles.container} inkBarStyle={styles.inkBar} onChange={this._handleTabsChange())} value = {this.state.value}>
        <Tab  style= {styles.tab} value="/home" label='HOME'>
        </Tab>
        <Tab style= {styles.tab} value="/work" label='WORK'>
        </Tab>
        <Tab  style= {styles.tab} value="/contact" label='CONTACTS'>
        </Tab>
      </Tabs>
    )
  }
}
Navbar.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default Navbar;
