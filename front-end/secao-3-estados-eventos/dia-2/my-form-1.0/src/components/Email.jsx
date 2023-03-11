import React, { Component } from 'react';

class Email extends Component {
    render() {
        const { email, handleChange} = this.props;
        return (
            <label htmlFor="email">
            Nome:
            <input id="email" email="email" type="text" value={email}  onChange={handleChange}/>
          </label>
        )
    }
}

export default Email;