import React, { useState } from "react";
import { Field } from "formik";
const PageOne = () => {
  return (
    <div>
      <div style={{ paddingBottom: "20px" }}>
        <div>First Name</div>
        <Field name="firstname" />
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <div>Last Name</div>
        <Field name="lastname" />
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <div>Date of Birth</div>
        <Field name="dob" />
      </div>
    </div>
  );
};

export default PageOne;
