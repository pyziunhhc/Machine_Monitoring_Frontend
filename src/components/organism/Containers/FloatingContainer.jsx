import React, { useState } from "react";
import Belt from "components/atoms/Belt/Belt";
import { FloatingWrapper } from "./FloatingContainer.styles";
import { useMachines } from "hooks/useMachines";

const FloatingContainer = ({
  children,
  className,
  machineName,
  screenType,
  beltText,
  removeWindow,
}) => {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });
  const [isForeground, setIsForeground] = useState(false);
  // const putInTheForeground = () => {
  //   console.log(document.querySelector(".foreground"));
  //   setIsForeground((prevState) => !prevState);
  // };
  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };
  return (
    <FloatingWrapper
      className={`${className}`}
      data-type={screenType}
      style={{
        transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
        zIndex: isForeground ? "3" : "2",
      }}
      // onClick={putInTheForeground}
      // onMouseLeave={putInTheForeground}
    >
      <Belt
        onDragMove={handleDragMove}
        beltText={beltText}
        machineName={machineName}
        // putInTheForeground={putInTheForeground}
        removeWindow={removeWindow}
      />
      {children}
    </FloatingWrapper>
  );
};

export default FloatingContainer;
