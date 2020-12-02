import React, { Component } from 'react'

export class Model extends Component {
    handlechange() {
        // this.setState({
        //     username : "Mondler"
        // });
        this.setState(prevState => ({
            username : "Mondler"
        }))
    }


    render() {
        this.state = {
            firstname : "Chandler",
            lastname : "Bing",
            username : "Matthew Perry",
            friends:["Joey","Ross"]
        };
        return (
            <div>
                <h4> Hello This is {this.state.username} and this is from {this.props.realname}</h4>
                <button onClick={this.handlechange}> Change</button>
            </div>
        )
    }
}

export default Model
