import React, { Component } from 'react';
import Nav from './app-components/nav'
import Sidebar from './app-components/sidebar'
import Compose from './app-components/compose'
import Chat from './app-components/chat'


export class home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div className="layout">

                <Nav />
                <Sidebar />
                <Chat />
                <Compose />
            
            </div>
        )
    }
}

export default home
