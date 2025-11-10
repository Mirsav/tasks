import { useEffect, useRef } from "react";

const withRenderTracker = (Component, componentName) => {
  return function ComponentWithTracker(props) {
    const countRender = useRef(0);

    countRender.current += 1;

    useEffect(() => {
      console.log(
        `Component ${componentName} was rendered ${countRender.current} time(s)`,
      );
    });

    return <Component {...props} />;
  };
};

export default withRenderTracker;
