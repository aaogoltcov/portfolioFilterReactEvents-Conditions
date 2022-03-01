import React, {Component} from 'react';
import '../Portfolio/Portfolio.min.css'
import PropTypes from 'prop-types';

class Toolbar extends Component {
    constructor(props) {
        super(props);
    }

    generateMenuToolbar() {
        this.menuToolbar = [];
        let key = 0;
        for (let item of this.props.filter) {
            if (item === this.props.active) {
                this.menuToolbar.push(<li className="active" key={ key }><a href="#">{ item }</a></li>);
            } else {this.menuToolbar.push(<li key={ key }><a href="#">{ item }</a></li>)}
            key++;
        }
        return this.menuToolbar;
    }

    handleClick = evt => {this.props.onSelectFilter(evt.target.textContent)};

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header"><a className="navbar-brand" href="#">Portfolio</a></div>
                        <ul className="nav navbar-nav" onClick={this.handleClick}>{this.generateMenuToolbar()}</ul>
                    </div>
                </nav>
            </div>
        );
    }
}

Toolbar.propTypes = {};

export default Toolbar;