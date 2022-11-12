import { Component } from 'react';
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    render() {
        return (
            <header className='App'>
                <h2>Olá</h2>
                <p>{this.state.text}</p>
                <button
                    onClick={() =>
                        this.setState({ text: this.state.text + 'Seja bem vindo(a)' })
                    }
                >
                    Clique aqui
                </button>
            </header>
        );
    }
}

export default Button;