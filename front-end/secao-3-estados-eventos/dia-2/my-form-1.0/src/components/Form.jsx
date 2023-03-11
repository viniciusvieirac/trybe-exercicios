import React, { Component } from 'react';
import Name from './Name';
import Email from './Email';
import Age from './Age';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: 0,
      sobre: '',
      check: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, name, age, sobre } = this.state;

    return (
      <div>
        <h1>
          Nos diga sobre você
        </h1>
        <form className="form">
            <fieldset>
                <legend>Informações pessoais</legend>
            <Name value={ name } handleChange={this.handleChange}/>
            <br/>
            <Email value={ email } handleChange={this.handleChange}/>
          <Age  value={ age } handleChange={this.handleChange}/>
            </fieldset>

            <fieldset>
                <legend>Texto e imagem</legend>
          <label htmlFor="sobre" value={sobre}  onChange={this.handleChange}>
            Sobre você
            <textarea id="sobre" name="sobre" />
          </label>
          <label htmlFor="sobre" onChange={this.handleChange}>
            Envie sua imagem
            <input type="file" />
          </label>

            </fieldset>
          <label htmlFor="sobre" value={sobre}  onChange={this.handleChange}>
            Você é vasco?
            <input type="checkbox" id="check" name="check" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
