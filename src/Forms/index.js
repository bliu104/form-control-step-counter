import React, { useState } from "react";
import { Formik, Form } from "formik";
import StepCounter from "../StepCounter";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const Forms = () => {
  const form = [
    { title: "Profile", page: 1, content: <PageOne /> },
    { title: "Address", page: 2, content: <PageTwo /> },
  ];

  const initialValues = {
    firstname: "",
    lastname: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <div style={{ padding: "5%" }}>
          <StepCounter forms={form} />
        </div>
      </Form>
    </Formik>
  );
};

export default Forms;
