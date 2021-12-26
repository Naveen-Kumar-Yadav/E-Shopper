import React, { Component } from 'react'
import Axios from 'axios';
export class Users extends Component {
    constructor(props){
        super(props);
        this.state={userData:[]}
    }
    componentDidMount(){
        const URL="https://jsonplaceholder.typicode.com/users";
        Axios.get(URL)
        .then(res=>{
            console.log(res.data);
            this.setState({userData:res.data})
        })
        .catch(err=> console.log("Error - "+err));
    }
    render() {
        return (
            <div>
                <h2> Users</h2>
                <ul>
                    {this.state.userData.map(user=>
                        <li>{user.email}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Users
