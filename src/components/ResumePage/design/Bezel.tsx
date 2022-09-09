import React, { FC } from "react";

interface BezelProps {
  height: number;
  color: string;
  top?: boolean;
  right?: boolean;
  base: number;
}

const Bezel: FC<React.PropsWithChildren<BezelProps>> = ({
  height,
  color,
  top = false,
  right = false,
  base = 1,
}) => {
  let pos: Array<number>;

  if (!top && !right) {
    pos = [0, 0, height, base];
  } else if (!top && right) {
    pos = [0, 0, base, height];
  } else if (top && !right) {
    pos = [height - base, 0, height, height];
  } else {
    pos = [0, height - base, height, height];
  }

  return (
    <svg
      id="trapezoid"
      viewBox={`0 0 100 ${height}`}
      preserveAspectRatio="none"
      width="100%"
    >
      <path
        d={`M0,${pos[0]} L100,${pos[1]} L100,${pos[2]} L0,${pos[3]}`}
        fill={color}
      />
    </svg>
  );
};

export default Bezel;
