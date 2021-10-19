import { useMachines } from "hooks/useMachines";
import React, { useState } from "react";
import { Wrapper, StyledHeading } from "./Belt.styles";
export default function Belt({
  children,
  removeWindow,
  machineName,
  beltText,
  putInTheForeground,
  ...props
}) {
  const { onDragMove } = props;
  const [isDragging, setIsDragging] = useState(false);
  const { handleShowDetailsWindow } = useMachines();

  const handlePointerDown = (e) => {
    setIsDragging(true);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
  };

  const handlePointerMove = (e) => {
    if (isDragging) onDragMove(e);
  };

  return (
    <Wrapper
      className="belt"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        setIsDragging(false);
      }}
      onClick={putInTheForeground}
      onMouseLeave={putInTheForeground}>
      <StyledHeading beltText={beltText}></StyledHeading>
      <div className="actions">
        <button>_</button>
        <button
          onClick={async () => {
            if (removeWindow) {
              removeWindow(false);
            } else {
              handleShowDetailsWindow(false, machineName, "remove");
            }
          }}>
          X
        </button>
      </div>

      {children}
    </Wrapper>
  );
}
