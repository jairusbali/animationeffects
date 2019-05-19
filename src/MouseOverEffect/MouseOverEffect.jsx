import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { relative } from "path";

const Container = styled.div`
  position: "relative";
  height: "20vh";
  font-size: 5rem;
`;

export default () => {
  const [coord, setCoord] = useState({
    x: 0,
    y: 0
  });

  const [animation, setAnimation] = useState({});

  const element = useRef(null);

  let secondaryStyle;
  useEffect(() => {
    console.log(secondaryStyle);
  }, [secondaryStyle]);

  const calc = event => {
    console.log(event.clientX);
    console.log(event.clientY);
    const newCoord = {
      x: event.clientX,
      y: event.clientY
    };
    setCoord(newCoord);

    const widthPercent = (newCoord.x / element.current.clientWidth) * 100;
    const heightPercent = (newCoord.y / element.current.clientHeight) * 100;

    setAnimation({
      clipPath: `polygon(0 0, ${widthPercent}% 0, ${heightPercent}% 100%, 0% 100%`
    });

    console.log(widthPercent);
    console.log(heightPercent);
  };

  return (
    <Container
      onMouseMove={calc}
      onMouseOut={() => {
        setAnimation({ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%` });
        console.log("outside");
      }}
    >
      <h1 className="mainStyle">This is an example</h1>

      <h1 className="secondary" style={animation} ref={element}>
        This is an example
      </h1>
    </Container>
  );
};
