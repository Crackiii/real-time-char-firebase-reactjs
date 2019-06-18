import React, { Component } from 'react'

export class files extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="tab-pane fade" id="files" role="tabpanel">
                <h4>Files</h4>
                <div className="upload">
                    <label>
                        <input type="file" />
                        <span>Drag & drop files here</span>
                    </label>
                </div>
                <ul className="files">
                    <li>
                        <ul className="avatars">
                            <li><button className="btn round"><i data-eva="file-text"></i></button></li>
                            <li><a href="#tab"><img src="dist/img/avatars/avatar-male-1.jpg" alt="avatar" /></a></li>
                        </ul>
                        <div className="meta">
                            <a href="#tab"><h5>workbox.js</h5></a>
                            <span>2kb</span>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-eva="more-vertical"></i></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <button type="button" className="dropdown-item">Edit</button>
                                <button type="button" className="dropdown-item">Share</button>
                                <button type="button" className="dropdown-item">Delete</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <ul className="avatars">
                            <li><button className="btn round"><i data-eva="folder"></i></button></li>
                            <li><a href="#tab"><img src="dist/img/avatars/avatar-male-2.jpg" alt="avatar" /></a></li>
                        </ul>
                        <div className="meta">
                            <a href="#tab"><h5>bug_report</h5></a>
                            <span>1kb</span>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-eva="more-vertical"></i></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <button type="button" className="dropdown-item">Edit</button>
                                <button type="button" className="dropdown-item">Share</button>
                                <button type="button" className="dropdown-item">Delete</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <ul className="avatars">
                            <li><button className="btn round"><i data-eva="briefcase"></i></button></li>
                            <li><a href="#tab"><img src="dist/img/avatars/avatar-male-3.jpg" alt="avatar" /></a></li>
                        </ul>
                        <div className="meta">
                            <a href="#tab"><h5>nuget.zip</h5></a>
                            <span>7mb</span>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-eva="more-vertical"></i></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <button type="button" className="dropdown-item">Edit</button>
                                <button type="button" className="dropdown-item">Share</button>
                                <button type="button" className="dropdown-item">Delete</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <ul className="avatars">
                            <li><button className="btn round"><i data-eva="image-2"></i></button></li>
                            <li><a href="#tab"><img src="dist/img/avatars/avatar-male-4.jpg" alt="avatar" /></a></li>
                        </ul>
                        <div className="meta">
                            <a href="#tab"><h5>clearfix.jpg</h5></a>
                            <span>1kb</span>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-eva="more-vertical"></i></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <button type="button" className="dropdown-item">Edit</button>
                                <button type="button" className="dropdown-item">Share</button>
                                <button type="button" className="dropdown-item">Delete</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <ul className="avatars">
                            <li><button className="btn round"><i data-eva="folder"></i></button></li>
                            <li><a href="#tab"><img src="dist/img/avatars/avatar-male-5.jpg" alt="avatar" /></a></li>
                        </ul>
                        <div className="meta">
                            <a href="#tab"><h5>package</h5></a>
                            <span>4mb</span>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-eva="more-vertical"></i></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <button type="button" className="dropdown-item">Edit</button>
                                <button type="button" className="dropdown-item">Share</button>
                                <button type="button" className="dropdown-item">Delete</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <ul className="avatars">
                            <li><button className="btn round"><i data-eva="file-text"></i></button></li>
                            <li><a href="#tab"><img src="dist/img/avatars/avatar-male-6.jpg" alt="avatar" /></a></li>
                        </ul>
                        <div className="meta">
                            <a href="#tab"><h5>plugins.js</h5></a>
                            <span>3kb</span>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-eva="more-vertical"></i></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <button type="button" className="dropdown-item">Edit</button>
                                <button type="button" className="dropdown-item">Share</button>
                                <button type="button" className="dropdown-item">Delete</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default files
