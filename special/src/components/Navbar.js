import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid p-0 bg-dark d-flex flex-column justify-content-center align-items-center">
                    
                    <div className="content">
                        <a href={this.props.url} className="navbar-brand">
                            <i className={this.props.icon}></i>
                            <span>{this.props.title}</span>
                        </a> <br />
                        <a href="#formId" className="btn btn-light">LETS START</a>
                    </div>  
                    
                   
            </div>
        )
    }
}