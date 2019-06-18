import React, { Component } from 'react'
import Discussion from './side-bar-components/discussion'
import Friends from './side-bar-components/friends'
import Notifications from './side-bar-components/notifications'
import Settings from './side-bar-components/settings'


export class sidebar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="sidebar">
                <div className="container">
                    <div className="tab-content">
                    

                        <Discussion />
                        <Friends />
                        <Notifications />
                        <Settings />



                    </div>
                </div>
            </div>
        )
    }
}

export default sidebar
