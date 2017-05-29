
import PropTypes from "prop-types";
import React, {Component} from "react";
import {FormControl, FormGroup} from "react-bootstrap";

export default class Input extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'components/InputText';
        this.state = {dirty: false};
    }

    render() {
        let {fieldId, value, placeholder, onChange, required, ariaLabel} = this.props;
        return (
            <FormGroup data-component-name={this.displayName}
                       controlId={fieldId}
                       validationState={true}>
                <FormControl type="text"
                             value={value}
                             placeholder={placeholder}
                             onChange={onChange}
                             tabIndex="0"
                             required={required}
                             aria-label={ariaLabel}/>
            </FormGroup>
        )
    }
}

Input.propTypes = {
    fieldId: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
