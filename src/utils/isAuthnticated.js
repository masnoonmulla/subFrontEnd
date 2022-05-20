import React, { Component } from 'react';


export default function (ComposedComponent) {
    let token = localStorage.getItem('token');
    
    class isAuthonticated extends Component {
        componentWillMount() {
            if (!token) {
                this.props.history('/', { replace: true });
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }
    return isAuthonticated;
}

