import React, { useState } from "react";
import "./style.css";

const StepCounter = ({ forms }) => {
  const [component, setComponent] = useState(forms[0].page);
  const [hasBeenTo, setHasBeenTo] = useState([forms[0].page]);

  const handleClick = (e) => {
    const id = parseInt(e.target.id);
    setComponent(parseInt(e.target.id));
    setHasBeenTo((prev) => [...prev, id]);
  };

  const visited = (step) => {
    if (hasBeenTo.includes(step.page)) {
      return (
        <div
          className="whitecircle"
          id={step.page}
          onClick={(e) => {
            handleClick(e);
          }}
        ></div>
      );
    } else {
      return <div className="graycircle" id={step.page}></div>;
    }
  };

  const dots = () => {
    return forms.map((step, index) => {
      return (
        <div className="rootStep" key={index}>
          <div className="blackcircle">
            {component === step.page ? (
              <div
                className="greencircle"
                id={step.page}
                onClick={(e) => {
                  handleClick(e);
                }}
                key={index}
              ></div>
            ) : (
              <>{visited(step)}</>
            )}
          </div>
          <div className="title">{step.title}</div>
        </div>
      );
    });
  };

  const pageRender = (forms) => {
    return forms.map((page, index) => {
      if (page.page === component) {
        return <div key={index}>{page.content}</div>;
      } else {
        return null;
      }
    });
  };

  const nextPage = (forms) => {
    if (component < forms.length) {
      return (
        <div
          className="button"
          onClick={() => {
            setComponent(component + 1);
            setHasBeenTo((prev) => [...prev, component + 1]);
          }}
        >
          Next
        </div>
      );
    } else {
      return (
        <button className="button" type="submit">
          Finish
        </button>
      );
    }
  };

  return (
    <div className="root">
      <div>{dots()}</div>
      <div className="contentContainer">
        {pageRender(forms)}
        <div>{nextPage(forms)}</div>
      </div>
    </div>
  );
};

export default StepCounter;
