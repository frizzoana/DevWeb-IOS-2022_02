import { Component } from 'react';
import PropTypes from 'prop-types';

export class Header extends Component {
    render() {
        return (
            <section>
                <h1>Olá, {this.props.nome}, seja bem-vindo(a)!</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum deleniti itaque ad, numquam omnis illo impedit quos sapiente explicabo odio reiciendis necessitatibus. Veritatis, itaque voluptate! Cupiditate autem aut adipisci vitae!</p>
            </section>
        );
    }
}

Header.propTypes = {
    nome: PropTypes.string,
};

export default Header;