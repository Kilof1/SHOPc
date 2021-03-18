import * as React from "react";
import "./ChangeButtons.scss";

interface ChangeButtonsProps {
  next: () => void;
  previous: () => void;
}

const ChangeButtons: React.FC<ChangeButtonsProps> = (
  props: ChangeButtonsProps
) => {
  return (
    <div className="changeButtons-container">
      <div className="changeButtons previous" onClick={props.next}>
        <button className="changeButtons-btn">{">"}</button>
      </div>
      <div className="changeButtons next" onClick={props.previous}>
        <button className="changeButtons-btn">{"<"}</button>
      </div>
    </div>
  );
};

export default ChangeButtons;
