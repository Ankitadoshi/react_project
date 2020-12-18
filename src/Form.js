import React from 'react';

class Form extends React.Component {
    state = {userName: ''}
    handleSubmit = async (event) => {
        event.preventDefault();
        let resp = await fetch(`https://api.github.com/users/${this.state.userName}`, {
            method:'GET',
            headers: {
                'content-type' : 'application/json'
            }
        });
        
        let data = await resp.json();
        this.props.onSubmit(data);
        this.setState({userName: ''});
    }
    render () {
        return (
            <form className="form">
                <input 
                    type="text" 
                    placeholder="enter username" 
                    value={this.state.userName}
                    onChange={(event) => {this.setState({ userName: event.target.value })}}
                    ></input>
                <button onClick={this.handleSubmit}>Add new Card</button>
            </form>
        )
    }

}
export default Form;