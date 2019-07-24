import React, { Component } from 'react';
import ListOfContacts from './list';
import { deleteContact } from '../actions/contact.action';
import '../css/listPage.css';
import EditForm from './contact.edit';

class ListPage extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.state = {
            contacts: this.props.store.getState().contacts,
            term: '',
            showList: true,
            showEditBar: false,
            editTarget: ''
        }
    }

    showListBar() {
        this.setState({
            editTarget: '',
            showList: !this.state.showList,
            showEditBar: !this.state.showEditBar,
        });      
    }

    showEditBar(e) {
        this.setState({
            editTarget: e,
            showList: !this.state.showList,
            showEditBar: !this.state.showEditBar
        })
    }

    search(term) {
        let tmp
        if (!term.trim()) {
            tmp = this.props.store.getState().contacts;
        } else {
            tmp = this.props.store.getState().contacts.filter(
                contact => {
                    return (contact.name.title.toLowerCase().includes(term.toLowerCase()) || 
                    contact.name.first.toLowerCase().includes(term.toLowerCase()) ||
                    contact.name.last.toLowerCase().includes(term.toLowerCase()))}
                )
        }
        this.setState({ contacts: tmp });
    }


    render() {
        return ( (this.state.showList) ? (
            <div className="wrapper">
            <div className="searchBar">
                <button onClick={ () => { this.props.toggle() } }>New Contact</button>
                    <input type="text" 
                        onChange={(e) => this.search(e.target.value)} 
                        placeholder="Enter who are U looking for..."/>
            </div>
                <ListOfContacts contacts={ this.state.contacts } editContact={ e => { this.showEditBar(e) } } deleteContact={ (e) => { this.props.store.dispatch(deleteContact(e)); this.search(this.state.term) } } />
            </div>
        ) : 
        (<EditForm target={ this.state.editTarget }  store={this.props.store} showEditBar={ () => { this.showEditBar(); this.search(this.state.term) } }/>))
    }
}

export default ListPage;