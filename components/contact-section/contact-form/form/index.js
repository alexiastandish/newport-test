import React, { Component } from 'react';
import DeepDiff from 'deep-diff';
import classNames from 'classnames';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      prevErrors: {}
    };
  }

  validateAllFields = (schema, fields) => {
    try {
      schema.validateSync(fields, { abortEarly: false });
      return null;
    } catch (err) {
      const errors = err.inner.reduce((acc, currentError) => {
        if (acc[currentError.params.path]) {
          acc[currentError.params.path].push(currentError.message);
          return acc;
        } else {
          acc[currentError.params.path] = [currentError.message];
          return acc;
        }
      }, {});
      return Object.keys(errors).length > 0 ? errors : null;
    }
  };

  validatePrevFields = (schema, fields) => {
    try {
      schema.validateSync(fields, { abortEarly: false });
      return null;
    } catch (err) {
      const errors = err.inner.reduce((acc, currentError) => {
        if (!this.state.prevErrors[currentError.params.path]) {
          return acc;
        }

        if (acc[currentError.params.path]) {
          acc[currentError.params.path].push(currentError.message);
          return acc;
        } else {
          acc[currentError.params.path] = [currentError.message];
          return acc;
        }
      }, {});
      return Object.keys(errors).length > 0 ? errors : null;
    }
  };

  submitFormWithValidation = () => {
    const errors = this.validateAllFields(
      this.props.validationSchema,
      this.props.fields
    );
    if (!errors) {
      return this.props.submitForm();
    }
    this.setState({
      errors,
      prevErrors: errors
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const errors = this.validatePrevFields(
      this.props.validationSchema,
      this.props.fields
    );
    const errDiff = DeepDiff(errors, this.state.errors);
    if (errDiff) {
      this.setState({
        errors
      });
    }
  }

  render() {
    const { className } = this.props;
    return (
      <div className={classNames('form', className && className)}>
        {this.props.children({
          errors: this.state.errors,
          submitFormWithValidation: this.submitFormWithValidation
        })}
      </div>
    );
  }
}

export default Form;
