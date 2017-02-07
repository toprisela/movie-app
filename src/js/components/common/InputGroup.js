import React, { Component } from 'react';
import classNames from 'classnames';
const InputGroup = ({ field, value, label, type, error, onChange }) => {
    return (
        <div class={classNames("form-group", { 'has-error': error })}>
            <label for={field} class="control-label">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                name={field}
                id={field}
                class="form-control"
            />
            {error && <span class="help-block">{error}</span>}
        </div>
    );
}

InputGroup.propTypes = {
    field: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
};

InputGroup.defaultProps = {
    type: 'text'
}

export default InputGroup;