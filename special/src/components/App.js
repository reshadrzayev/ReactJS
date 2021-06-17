import React, {Component} from 'react'
import Navbar from './Navbar'
import Search  from './Search'
import Users from './Users'
import axios from 'axios'

export default class App extends Component {

    constructor(props){
        super(props);
        this.searchUsers=this.searchUsers.bind(this)

        this.state={
            users:[]
        }
    }

    searchUsers(keyword){
        axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then(res => this.setState({users: res.data.items}));
    }


    render() {
        return (
            <div>
                <Navbar url="https://github.com" title="Github Finder" icon="fab fa-github" />
                <Search searchUsers={this.searchUsers}/>
                <Users users={this.state.users} />
            </div>
        )
    }
}

