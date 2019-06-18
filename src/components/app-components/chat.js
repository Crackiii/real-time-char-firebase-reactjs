import React, { Component } from 'react'
import Room from './chat-components/room'
import Utilities from './chat-components/utility'

export class chat extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message_typed : ''
        }
        
    }

    render() {
        return (
                <div className="chat">
                    <div className="tab-content">
                        { /* Start of Chat Room */}
                        <div className="tab-pane fade show active" id="chat1" role="tabpanel">
                            <div className="item">

                                <Room />
                                { /* Start of Utility */}
                                <Utilities />
                                { /* End of Utility */}

                            </div>
                        </div>
                        { /* End of Chat Room */}
                    </div>
                </div>
        )
    }
}

export default chat
