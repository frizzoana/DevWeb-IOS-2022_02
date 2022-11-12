import './App.css';
import { Component } from 'react';
import Button from './Components/Button';
import Section from './Components/Section';

export class App extends Component {
    render() {
        return (
            <div>
                <Section />
                <Button />
            </div>
        );
    }
}

export default App;