import React, { Component } from 'react'

export class compose extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            compose_title:'',
            compose_message :''
        }

        this.handleComposeForm = this.handleComposeForm.bind(this);


    }

    handleComposeForm(event){
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(event.target.name, event.target.value);
    }
    
    render() {
        return (
                <div className="modal fade" id="compose" tabIndex="-1" role="dialog" aria-labelledby="compose" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5>Compose</h5>
                                <button type="button" className="btn round" data-dismiss="modal" aria-label="Close">
                                    <i data-eva="close"></i>
                                </button>
                            </div>
                            <div className="modal-body">
                                <ul className="nav" role="tablist">
                                    <li><a href="#details" className="active" data-toggle="tab" role="tab" aria-controls="details" aria-selected="true">Details</a></li>
                                    <li><a href="#participants" data-toggle="tab" role="tab" aria-controls="participants" aria-selected="false">Participants</a></li>
                                </ul>
                                <div className="tab-content">
                                    {/*Start of Details */}
                                    <div className="details tab-pane fade show active" id="details" role="tabpanel">
                                        <form>
                                            <div className="form-group">
                                                <label>Title</label>
                                                <input type="text" className="form-control" name="compose_title" value={this.state.compose_title} onChange={this.handleComposeForm} placeholder="What's the topic?" />
                                            </div>
                                            <div className="form-group">
                                                <label>Message</label>
                                                <textarea className="form-control" name="compose_message" value={this.state.compose_message} onChange={this.handleComposeForm} placeholder="Hmm, are you friendly?"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    {/*End of Details */}
                                    {/*Start of Participants */}
                                    <div className="participants tab-pane fade" id="participants" role="tabpanel">
                                        <div className="search">
                                            <form>
                                                <input type="search" className="form-control" placeholder="Search" />
                                                <button type="submit" className="btn prepend"><i data-eva="search"></i></button>
                                            </form>
                                        </div>
                                        <h4>Users</h4>
                                        <hr />
                                        <ul className="users">
                                            <li>
                                                <div className="status online"><img src="dist/img/avatars/avatar-male-1.jpg" alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                                <div className="content">
                                                    <h5>Ham Chuwon</h5>
                                                    <span>Florida, US</span>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="user1" />
                                                    <label className="custom-control-label" htmlFor="user1"></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="status offline"><img src="dist/img/avatars/avatar-male-2.jpg" alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                                <div className="content">
                                                    <h5>Quincy Hensen</h5>
                                                    <span>Shanghai, China</span>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="user2" />
                                                    <label className="custom-control-label" htmlFor="user2"></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="status online"><img src="dist/img/avatars/avatar-male-3.jpg" alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                                <div className="content">
                                                    <h5>Mark Hog</h5>
                                                    <span>Olso, Norway</span>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="user3" />
                                                    <label className="custom-control-label" htmlFor="user3"></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="status offline"><img src="dist/img/avatars/avatar-male-4.jpg" alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                                <div className="content">
                                                    <h5>Sanne Viscaal</h5>
                                                    <span>Helena, Montana</span>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="user4" />
                                                    <label className="custom-control-label" htmlFor="user4"></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="status offline"><img src="dist/img/avatars/avatar-male-5.jpg" alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                                <div className="content">
                                                    <h5>Alex Just</h5>
                                                    <span>London, UK</span>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="user5" />
                                                    <label className="custom-control-label" htmlFor="user5"></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="status online"><img src="dist/img/avatars/avatar-male-6.jpg" alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                                <div className="content">
                                                    <h5>Arturo Thomas</h5>
                                                    <span>Vienna, Austria</span>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="user6" />
                                                    <label className="custom-control-label" htmlFor="user6"></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="status offline"><img src="dist/img/avatars/avatar-female-1.jpg" alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                                <div className="content">
                                                    <h5>Victoria Garner</h5>
                                                    <span>Chisinau, Moldova</span>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="user7" />
                                                    <label className="custom-control-label" htmlFor="user7"></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="status offline"><img src="dist/img/avatars/avatar-female-2.jpg" alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                                <div className="content">
                                                    <h5>Maria Baron</h5>
                                                    <span>Indore, India</span>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="user8" />
                                                    <label className="custom-control-label" htmlFor="user8"></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="status online"><img src="dist/img/avatars/avatar-female-3.jpg" alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                                <div className="content">
                                                    <h5>Sara Koch</h5>
                                                    <span>Sofia, BG</span>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="user9" />
                                                    <label className="custom-control-label" htmlFor="user9"></label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*End of Participants */}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn primary">Compose</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default compose
