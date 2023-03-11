import React from 'react';


class App extends React.Component {
  constructor() {
    super()
    this.HandleClick = this.HandleClick.bind(this);
    this.state = {
      numeroDeCliques: 0,  
    }
  }

  HandleClick() {
    const { numeroDeCliques } = this.state;
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(numeroDeCliques)}`);
    }
    )
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'blue';
  }
  
  render() {
    const { numeroDeCliques } = this.state;
    return (
      <div className="App">
      <button onClick={this.HandleClick} style={ {backgroundColor: this.getButtonColor(numeroDeCliques)}}>{`Cliques botão 1: ${numeroDeCliques}`}</button>
      </div>
    );
  }
}


export default App;
