import React, { Component } from 'react'

export class nav extends Component {
    render() {
        return (
                <nav className="navigation">
                    <div className="container">
                        <a href="#nav" className="logo" rel="home"> <img src="dist/img/logo.png" alt="logo" /> </a>
                        <ul className="nav" role="tablist">
                            <li><a href="#conversations" className="active" data-toggle="tab" role="tab" aria-controls="conversations" aria-selected="true"><i data-eva="message-square" data-eva-animation="pulse"></i></a></li>
                            <li><a href="#friends" data-toggle="tab" role="tab" aria-controls="friends" aria-selected="false"><i data-eva="people" data-eva-animation="pulse"></i></a></li>
                            <li><a href="#notifications" data-toggle="tab" role="tab" aria-controls="notifications" aria-selected="false"><i data-eva="bell" data-eva-animation="pulse"></i></a></li>
                            <li><a href="#settings" data-toggle="tab" role="tab" aria-controls="settings" aria-selected="false"><i data-eva="settings" data-eva-animation="pulse"></i></a></li>
                            <li><button type="button" className="btn mode"><i data-eva="bulb" data-eva-animation="pulse"></i></button></li>
                            <li><button type="button" className="btn"><img src="dist/img/avatars/avatar-male-1.jpg" alt="avatar" /><i data-eva="radio-button-on"></i></button></li>
                        </ul>
                    </div>
                </nav>
        )
    }
}

export default nav
