import React, { Component } from 'react';

class Name extends Component {
    render() {
        const { name, handleChange} = this.props;

        let erro = undefined;
        if (typeof name != 'string') {
            erro = 'Apenas Letras';
        }
        return (
            <label htmlFor="name">
            Nome:
            <input id="name" name="name" type="text" value={name}  onChange={handleChange}/>
           <span> {erro ? erro : ''} </span> 
          </label>
        )
    }
}

export default Name;


