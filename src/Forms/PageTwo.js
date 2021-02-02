import React, { useState } from "react";
import { Field } from "formik";
const PageTwo = () => {
  return (
    <div>
      <div style={{ paddingBottom: "20px" }}>
        <div>Address</div>
        <Field name="address" />
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <div>City</div>
        <Field name="city" />
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <div>State</div>
        <Field name="state" />
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <div>Zip</div>
        <Field name="zip" />
      </div>
    </div>
  );
};

export default PageTwo;
