import { useState } from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%)
`;

const Loader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000000");

  return (
    <RingLoader color={color} css={override} loading={loading} size={60} />
  );
}

export default Loader;