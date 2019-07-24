import React, { Component } from 'react';

import './App.css';
import ContactForm from './components/contact.form';
import ListPage from './components/listPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      showList: true
    }
  }

  toggle() {
    this.setState({ showForm: !this.state.showForm, showList: !this.state.showList });
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.showForm && <ContactForm store={ this.props.store } toggle={() => this.toggle()}></ContactForm>}
        {this.state.showList && <ListPage store={ this.props.store } toggle={() => this.toggle()}/>}
      </div>
      )
  }
}

export default App;
