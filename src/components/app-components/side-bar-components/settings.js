import React, { Component } from 'react'

export class settings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             profile_change : '',
             first_name : '',
             last_name : '',
             user_email : '',
             user_pass : '',
             user_bio:''
        }
        this.handleUpdateForm = this.handleUpdateForm.bind(this);
    }

    handleUpdateForm(event){
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(event.target.name, event.target.value);
    }
    
    render() {
        return (
            <div>
                <div className="settings tab-pane fade" id="settings" role="tabpanel">
                    <div className="user">
                        <label>
                            <input type="file" name="profile_change" value={this.state.profile_change} onChange={this.handleUpdateForm}/>
                            <img src="dist/img/avatars/avatar-male-1.jpg" alt="avatar" />
                        </label>
                        <div className="content">
                            <h5>Ham Chuwon</h5>
                            <span>Florida, US</span>
                        </div>
                    </div>
                    <h4>Settings</h4>
                    <ul id="preferences">
                        { /*Start of Account */}
                        <li>
                            <a href="#tab" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#account" aria-controls="account">
                                <div className="title">
                                    <h5>Account</h5>
                                    <p>Update your profile details</p>
                                </div>
                                <i data-eva="arrow-ios-forward"></i>
                                <i data-eva="arrow-ios-downward"></i>
                            </a>
                            <div className="content collapse" id="account" data-parent="#preferences">
                                <div className="inside">
                                    <form className="account">
                                        <div className="form-row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>First Name</label>
                                                    <input type="text" className="form-control" name="first_name" placeholder="First name" value={this.state.first_name} onChange={this.handleUpdateForm} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Last Name</label>
                                                    <input type="text" className="form-control" name="last_name" placeholder="Last name" value={this.state.last_name} onChange={this.handleUpdateForm} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input type="email" className="form-control" name="user_email" placeholder="Enter your email address" value={this.state.user_email} onChange={this.handleUpdateForm} />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" name="user_pass" placeholder="Enter your password" value={this.state.user_pass} onChange={this.handleUpdateForm} />
                                        </div>
                                        <div className="form-group">
                                            <label>Biography</label>
                                            <textarea className="form-control" name="user_bio" placeholder="Tell us a little about yourself" value={this.state.user_bio} onChange={this.handleUpdateForm}></textarea>
                                        </div>
                                        <button type="submit" className="btn primary">Save settings</button>
                                    </form>
                                </div>
                            </div>
                        </li>
                        { /*End of Account */}
                        { /*Start of Privacy & Safety */}
                        <li>
                            <a href="#tab" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#privacy" aria-controls="privacy">
                                <div className="title">
                                    <h5>Privacy & Safety</h5>
                                    <p>Control your privacy settings</p>
                                </div>
                                <i data-eva="arrow-ios-forward"></i>
                                <i data-eva="arrow-ios-downward"></i>
                            </a>
                            <div className="content collapse" id="privacy" data-parent="#preferences">
                                <div className="inside">
                                    <ul className="options">
                                        <li>
                                            <div className="headline">
                                                <h5>Safe Mode</h5>
                                                <label className="switch">
                                                    <input type="checkbox" checked  name="safe_mode" value={this.state.safe_mode} onChange={this.handleUpdateForm}/>
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </li>
                                        <li>
                                            <div className="headline">
                                                <h5>History</h5>
                                                <label className="switch">
                                                    <input type="checkbox" checked  name="history" value={this.state.history} onChange={this.handleUpdateForm}/>
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </li>
                                        <li>
                                            <div className="headline">
                                                <h5>Camera</h5>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </li>
                                        <li>
                                            <div className="headline">
                                                <h5>Microphone</h5>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        { /*End of Privacy & Safety */}
                        { /*Start of Notifications */}
                        <li>
                            <a href="#tab" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#alerts" aria-controls="alerts">
                                <div className="title">
                                    <h5>Notifications</h5>
                                    <p>Turn notifications on or off</p>
                                </div>
                                <i data-eva="arrow-ios-forward"></i>
                                <i data-eva="arrow-ios-downward"></i>
                            </a>
                            <div className="content collapse" id="alerts" data-parent="#preferences">
                                <div className="inside">
                                    <ul className="options">
                                        <li>
                                            <div className="headline">
                                                <h5>Pop-up</h5>
                                                <label className="switch">
                                                    <input type="checkbox" checked  name="pop_up" value={this.state.pop_up} onChange={this.handleUpdateForm}/>
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </li>
                                        <li>
                                            <div className="headline">
                                                <h5>Vibrate</h5>
                                                <label className="switch">
                                                    <input type="checkbox" name="vibrate" value={this.state.vibrate} onChange={this.handleUpdateForm}/>
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </li>
                                        <li>
                                            <div className="headline">
                                                <h5>Sound</h5>
                                                <label className="switch">
                                                    <input type="checkbox" checked  name="sound" value={this.state.sound} onChange={this.handleUpdateForm}/>
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </li>
                                        <li>
                                            <div className="headline">
                                                <h5>Lights</h5>
                                                <label className="switch">
                                                    <input type="checkbox" name="lights" value={this.state.lights} onChange={this.handleUpdateForm}/>
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        { /*End of Notifications */}
                        { /*Start of Integrations */}
                        <li>
                            <a href="#tab" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#integrations" aria-controls="integrations">
                                <div className="title">
                                    <h5>Integrations</h5>
                                    <p>Sync your social accounts</p>
                                </div>
                                <i data-eva="arrow-ios-forward"></i>
                                <i data-eva="arrow-ios-downward"></i>
                            </a>
                            <div className="content collapse" id="integrations" data-parent="#preferences">
                                <div className="inside">
                                    <ul className="integrations">
                                        <li>
                                            <button className="btn round"><i data-eva="google"></i></button>
                                            <div className="content">
                                                <div className="headline">
                                                    <h5>Google</h5>
                                                    <label className="switch">
                                                        <input type="checkbox" checked  name="google" value={this.state.google} onChange={this.handleUpdateForm}/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <span>Read, write, edit</span>
                                            </div>
                                        </li>
                                        <li>
                                            <button className="btn round"><i data-eva="facebook"></i></button>
                                            <div className="content">
                                                <div className="headline">
                                                    <h5>Facebook</h5>
                                                    <label className="switch">
                                                        <input type="checkbox" checked  name="facebook" value={this.state.facebook} onChange={this.handleUpdateForm}/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <span>Read, write, edit</span>
                                            </div>
                                        </li>
                                        <li>
                                            <button className="btn round"><i data-eva="twitter"></i></button>
                                            <div className="content">
                                                <div className="headline">
                                                    <h5>Twitter</h5>
                                                    <label className="switch">
                                                        <input type="checkbox" name="twitter" value={this.state.twitter} onChange={this.handleUpdateForm}/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <span>No permissions set</span>
                                            </div>
                                        </li>
                                        <li>
                                            <button className="btn round"><i data-eva="linkedin"></i></button>
                                            <div className="content">
                                                <div className="headline">
                                                    <h5>LinkedIn</h5>
                                                    <label className="switch">
                                                        <input type="checkbox" name="linkedin" value={this.state.linkedin} onChange={this.handleUpdateForm}/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <span>No permissions set</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        { /*End of Integrations */}
                        { /*Start of Appearance */}
                        <li>
                            <a href="#tab" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#appearance" aria-controls="appearance">
                                <div className="title">
                                    <h5>Appearance</h5>
                                    <p>Customize the look of Swipe</p>
                                </div>
                                <i data-eva="arrow-ios-forward"></i>
                                <i data-eva="arrow-ios-downward"></i>
                            </a>
                            <div className="content collapse" id="appearance" data-parent="#preferences">
                                <div className="inside">
                                    <ul className="options">
                                        <li>
                                            <div className="headline">
                                                <h5>Lights</h5>
                                                <label className="switch">
                                                    <input type="checkbox" name="lights" value={this.state.lights} onChange={this.handleUpdateForm}/>
                                                    <span className="slider round mode"></span>
                                                </label>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        { /*End of Appearance */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default settings
