import React, { Component } from 'react';

export default class PersonList extends Component {

    get people() {
        return this.props.people.map((p, idx) => {
            return <li key={idx}>
                {p.firstName} {p.lastName}
                &nbsp;
                <a href="javascript:void(0)"
                    onClick={(p) => this.props.onEdit(p)}>
                    edit
                </a>
            </li>
        })
    }

    render() {
        return (
            <ul>
                {this.people}
            </ul>
        );
    }
}
