import React, { Component } from 'react'

export default class User extends Component {
    render() {
        const {login,avatar_url,html_url,followers} = this.props.user;

        return (
            <div>
                <div className="profile row">
                   <div className="image col-md-3">
                        <img src={avatar_url} alt="Error" className="card-img-top" />
                    </div>
                    <div className="about col-md-7">
                        <h5 className="card-title">{login}</h5>
                        <p className="card-text">{followers}</p>
                    </div>
                        <div className="button col-md-2">
                        <a href={html_url} className="btn btn-primary">Go Profile</a>
                    </div>
                </div>
            </div>
        )
    }
}

