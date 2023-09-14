// App.js
 
import React, { Component } from 'react'
import Result from './result'
import './op4.css'
class App extends Component {
 
    static defaultProps = {
        secret: Math.floor(Math.random() * 50) + 1
    }
 
    constructor(props) {
        super(props)
        this.state = { term: '' }
 
        this.handleChange = this.handleChange.bind(this)
    }
 
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    render() {
        return (
            <div className='oppgavebox5'>
                <h1 className='Oppgave4'>Oppgave 5</h1>
            <div className='container'>
                <div className='head'>
                    <label htmlFor='term'>
                        Guess Number between 1 to 50
                    </label>
                </div>
                <input
                    id='term'
                    type='text'
                    name='term'
                    value={this.state.term}
                    onChange={this.handleChange}
                />
 
                <Result term={this.state.term}
                    secretNum={this.props.secret} />
            </div>
            </div>
        )
    }
}
export default App