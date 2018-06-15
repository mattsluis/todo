import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Style from './style.scss';

export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {label, type, placeholder, value, inputChange, classNames, errorMessage} = this.props;
        return (
            <label className={classNames}>
                {this.props.type !== "checkbox" && label}
                <input type={type || 'text'}
                       placeholder={placeholder || ''}
                       value={value || undefined}
                       onChange={inputChange}
                />
                {this.props.type === "checkbox" && label}
                {errorMessage && <p className='error-text'>{errorMessage}</p>}
            </label>
        )
    }
}

Input.propTypes = {
    classNames: PropTypes.string,
    errorMessage: PropTypes.string,
    inputChange: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
};
