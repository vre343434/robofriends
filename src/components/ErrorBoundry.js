import React from 'react';
import { Component } from 'react/cjs/react.production.min';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if(this.props.hasError){
            return <h1>Oops!</h1>
        }
        return this.props.children;
    }
    
}

export default ErrorBoundry;