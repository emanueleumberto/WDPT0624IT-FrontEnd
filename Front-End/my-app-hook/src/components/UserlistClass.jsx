import React, { Component } from 'react'

export default class UserlistClass extends Component {

    constructor(props) {
        super(props)
        console.log("Sono il costruttore di una classe")
    }

    // Metodo invocato dopo il montaggio di un componente
    componentDidMount() {
        console.log("Sono il metodo componentDidMount di una classe")
    }

    // Metodo invocato dopo ogni modifica dello stato di un componente
    componentDidUpdate() {
        console.log("Sono il metodo componentDidUpdate di una classe")
    }

    // Metodo invocato poco prima dello smontaggio di un componente
    componentWillUnmount() {
        console.log("Sono il metodo componentWillUnmount di una classe")
    }
  
    render() {
        console.log("Sono il metodo render di una classe")
        return (
            <div>userlistClass</div>
        )
    }
}
