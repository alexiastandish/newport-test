import React from "react";
import set from "lodash/set";
import has from "lodash/has";

const enhancedReducer = (state, updateArg) => {
  // check if the type of update argument is a callback function
  if (updateArg.constructor === Function) {
    return { ...state, ...updateArg(state) };
  }

  // if the type of update argument is an object
  if (updateArg.constructor === Object) {
    // does the update object have _path and _value as it's keys
    // if yes then use them to update deep object values
    if (has(updateArg, "_path") && has(updateArg, "_value")) {
      const { _path, _value } = updateArg;

      return produce(state, draft => {
        set(draft, _path, _value);
      });
    } else {
      return { ...state, ...updateArg };
    }
  }
};

const useFormState = initialState => {
  const [state, updateState] = React.useReducer(enhancedReducer, initialState);

  const updateForm = React.useCallback(({ target: { value, name, type } }) => {
    const updatePath = name.split(".");

    // if the input is a checkbox then use callback function to update
    // the toggle state based on previous state
    if (type === "checkbox") {
      updateState(prevState => ({
        [name]: !prevState[name]
      }));

      return;
    }

    // if we have to update the root level nodes in the form
    if (updatePath.length === 1) {
      const [key] = updatePath;

      updateState({
        [key]: value
      });
    }

    // if we have to update nested nodes in the form object
    // use _path and _value to update them.
    if (updatePath.length === 2) {
      updateState({
        _path: updatePath,
        _value: value
      });
    }
  }, []);

  return [state, updateForm];
};

export default useFormState;
