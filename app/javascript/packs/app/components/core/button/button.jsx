import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Style from 'assets/stylesheets/core_components/button.scss';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.onClick && this.props.onClick('Button');
    }

    render() {
        return (
            <div>
                {this.props.type === 'submit' ?
                    <input
                        type={this.props.type}
                        value={this.props.buttonText}
                        className={`${Style.btn} ${this.props.classNames}`}
                        disabled={this.props.disabled || false}
                    />
                    :
                    <button
                        type={this.props.type || "button"}
                        className={`${Style.ltfButton} ${this.props.classNames}`}
                        onClick={this.handleClick}
                        disabled={this.props.disabled || false}
                    >
                        {this.props.buttonSpan && <span>{this.props.buttonSpan}</span>}
                        {this.props.buttonText}
                    </button>
                }
            </div>
        )
    }
}

Button.propTypes = {
    classNames: PropTypes.string,
    type: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    buttonSpan: PropTypes.string,
    onClick: PropTypes.func,
};