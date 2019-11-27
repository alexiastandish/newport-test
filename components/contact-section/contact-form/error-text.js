/**
 * Helper to get the text of a specific field error.
 * Returns the first message, and error checks.
 * @param errors
 * @param field
 * @returns {null|*}
 */
const getFormErrorText = (errors = [], field) => {
  if (errors && errors[field] && errors[field].length) {
    return errors[field][0];
  }

  return null;
};

export { getFormErrorText };
