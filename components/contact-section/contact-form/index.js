import React, { useState } from "react";
import { Button, Body, Input } from "../../../styles/common";
import { StyledForm } from "./styles";
import Form from "./form";
import formValidationSchema from "./validationSchema";
import useFormState from "./form-state";
import InputWrapper from "./input-wrapper";
import { getFormErrorText } from "./error-text";
import axios from "axios";

const ContactForm = () => {
  const initialState = {
    fname: "",
    lname: "",
    email: "",
    message: ""
  };

  const [fields, updateForm] = useFormState(initialState);

  const handleFormSubmit = () => {
    axios
      .post("https://formcarry.com/s/5YodmAHlQNY", fields, {
        headers: { Accept: "application/json" }
      })
      .then(res => console.log("res", res))
      .catch(error => console.log("error", error));
  };

  return (
    <Form
      fields={fields}
      validationSchema={formValidationSchema}
      submitForm={handleFormSubmit}
    >
      {({ errors, submitFormWithValidation }) => {
        return (
          <StyledForm>
            <InputWrapper
              title="First Name"
              error={getFormErrorText(errors, "fname")}
            >
              <Input
                type="text"
                name="fname"
                value={fields.fname || ""}
                error={errors && errors["fname"]}
                onChange={updateForm}
              />
            </InputWrapper>
            <InputWrapper
              title="Last Name"
              error={getFormErrorText(errors, "lname")}
            >
              <Input
                type="text"
                name="lname"
                // placeholder="Last name"
                error={errors && errors["lname"]}
                value={fields.lname || ""}
                onChange={updateForm}
              />
            </InputWrapper>
            <InputWrapper
              title="Email"
              error={getFormErrorText(errors, "email")}
            >
              <Input
                type="email"
                name="email"
                aria-describedby="emailHelp"
                error={errors && errors["email"]}
                // placeholder="Your Email Here"
                value={fields.email || ""}
                onChange={updateForm}
              />
            </InputWrapper>

            <InputWrapper
              title="Message"
              error={getFormErrorText(errors, "message")}
            >
              <textarea
                placeholder="Leave a message..."
                error={errors && errors["message"]}
                name="message"
                rows="5"
                value={fields.message || ""}
                onChange={updateForm}
              />
            </InputWrapper>
            <Button type="primary" onClick={submitFormWithValidation}>
              Submit
            </Button>
          </StyledForm>
        );
      }}
    </Form>
  );
};
export default ContactForm;
