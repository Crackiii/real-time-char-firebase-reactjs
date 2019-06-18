import React, { Component } from 'react'

export class discussion extends Component {
    constructor(props) {
        super(props)
    
        this.state = {}
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({dissearchvalue: event.target.value});
    }
    
    render() {
        return (
            <div>
                <div className="tab-pane fade show active" id="conversations" role="tabpanel">
                    <div className="top">
                        <form>
                            <input type="search" className="form-control" placeholder="Search" onChange={this.handleChange} value={this.state.disearch}/>
                            <button type="submit" className="btn prepend"><i data-eva="search"></i></button>
                        </form>
                        <ul className="nav" role="tablist">
                            <li><a href="#direct" className="filter-btn active" data-toggle="tab" data-filter="direct">Direct</a></li>
                            <li><a href="#groups" className="filter-btn" data-toggle="tab" data-filter="groups">Groups</a></li>
                        </ul>
                    </div>
                    <div className="middle">
                        <h4>Discussions</h4>
                        <button type="button" className="btn round" data-toggle="modal" data-target="#compose"><i data-eva="edit-2"></i></button>
                        <hr />
                        <ul className="nav discussions" role="tablist">
                            <li>
                                <a href="#chat1" className="filter direct active" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat1" aria-selected="true">
                                    <div className="status online"><img src="dist/img/avatars/avatar-male-1.jpg" alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                    <div className="content">
                                        <div className="headline">
                                            <h5>Ham Chuwon</h5>
                                            <span>Today</span>
                                        </div>
                                        <p>Please review and sign the binding agreement.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#chat1" className="filter direct" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat1" aria-selected="false">
                                    <div className="status offline"><img src="dist/img/avatars/avatar-male-2.jpg" alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                    <div className="content">
                                        <div className="headline">
                                            <h5>Quincy Hensen</h5>
                                            <span>Today</span>
                                        </div>
                                        <p>Additional information about the previous clients.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#chat1" className="filter direct" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat1" aria-selected="false">
                                    <div className="status online"><img src="dist/img/avatars/avatar-male-3.jpg" alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                    <div className="content">
                                        <div className="headline">
                                            <h5>Mark Hog</h5>
                                            <span>Feb 23</span>
                                        </div>
                                        <p>I'm looking to get a quote for the move from LA to NY.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#chat1" className="filter direct" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat1" aria-selected="false">
                                    <div className="status offline"><img src="dist/img/avatars/avatar-male-4.jpg" alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                    <div className="content">
                                        <div className="headline">
                                            <h5>Sanne Viscaal</h5>
                                            <span>Jan 18</span>
                                        </div>
                                        <p>My delivery address is pending final confirmation.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#chat1" className="filter direct" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat1" aria-selected="false">
                                    <div className="status offline"><img src="dist/img/avatars/avatar-male-5.jpg" alt="avatar"/><i data-eva="radio-button-on"></i></div>
                                    <div className="content">
                                        <div className="headline">
                                            <h5>Alex Just</h5>
                                            <span>May 2</span>
                                        </div>
                                        <p>Sending all the requested insurance documents.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#chat2" className="filter groups" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat2" aria-selected="false">
                                    <div className="content">
                                        <div className="headline">
                                            <img src="dist/img/avatars/avatar-group-1.jpg" alt="avatar" />
                                            <h5>The Musketeers</h5>
                                            <span>Today</span>
                                        </div>
                                        <p>Please review and sign the binding agreement.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#chat2" className="filter groups" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat2" aria-selected="false">
                                    <div className="content">
                                        <div className="headline">
                                            <img src="dist/img/avatars/avatar-group-2.jpg" alt="avatar" />
                                            <h5>Watts Up</h5>
                                            <span>Today</span>
                                        </div>
                                        <p>Additional information about the previous clients.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#chat2" className="filter groups" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat2" aria-selected="false">
                                    <div className="content">
                                        <div className="headline">
                                            <img src="dist/img/avatars/avatar-group-3.jpg" alt="avatar" />
                                            <h5>Memes</h5>
                                            <span>Feb 23</span>
                                        </div>
                                        <p>I'm looking to get a quote for the move from LA to NY.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#chat2" className="filter groups" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat2" aria-selected="false">
                                    <div className="content">
                                        <div className="headline">
                                            <img src="dist/img/avatars/avatar-group-4.jpg" alt="avatar" />
                                            <h5>Supernovas</h5>
                                            <span>Jan 18</span>
                                        </div>
                                        <p>My delivery address is pending final confirmation.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#chat2" className="filter groups" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat2" aria-selected="false">
                                    <div className="content">
                                        <div className="headline">
                                            <img src="dist/img/avatars/avatar-group-5.jpg" alt="avatar" />
                                            <h5>Squad Ghouls</h5>
                                            <span>May 2</span>
                                        </div>
                                        <p>Sending all the requested insurance documents.</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default discussion
