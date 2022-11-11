import { Component } from 'react';
class Conteudo extends Component {
 constructor(props) {
        super(props);
        this.state = {
            read: false,
            like: false,
            deslike: false,
        };
    }

    render() {
        return (
            <article>
                <h2>...</h2>
                <p>Read{this.state.read}</p>
                <button
                    onClick={() =>
                        this.setState({ read: (this.state.read = true) })
                    }
                >
                    Ler artigo
                </button>

                <p>Like{this.state.like}</p>
                <button
                    onClick={() =>
                        this.setState({ like: (this.state.like = true) })
                    }
                >
                    Gostei do artigo
                </button>


                <p>Deslike{this.state.deslike}</p>
                <button
                    onClick={() =>
                        this.setState({ deslike: (this.state.deslike = true) })
                    }
                >
                    Não gostei do artigo 
                </button>


                   //test

                    <div>
                        <h2>Deixe sua avaliação</h2>
            <p>Você {deslike} do artigo</p>
            <button
                    onClick={() =>
                        this.setState({ deslike: (this.state.deslike = 'Não gostou do arquivo') })
                    }
                >
                    Deslike
            </button>        



            <button onClick={() => setContador(contador + 1)}>
                Clique aqui
            </button>
        </div>



                </button>
            </article>
        );
    }
}

export default Conteudo;
