import React from "react";
import { useState} from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading = ({loading}) => {
  const [color, setColor] = useState("#3666d6");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="py-5">
      <HashLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
