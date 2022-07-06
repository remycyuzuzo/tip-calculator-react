import { useState } from "react";

function SelectTipButton({ percentage, onClickToSelect }) {
  const [isButton, setButton] = useState(true);

  const selectRateFromTextBox = (event) => {
    onClickToSelect.tipRate(event.target.value);
  };

  const selectRate = () => {
    if (isNaN(percentage) && percentage === "custom") {
      onClickToSelect.tipRate(0);
      onClickToSelect.custom(true);
      setButton(false);
    } else {
      onClickToSelect.tipRate(percentage);
      onClickToSelect.custom(false);
    }
  };

  const inputButton = (
    <button type="button" className="select-tip-button" onClick={selectRate}>
      {percentage} {!isNaN(percentage) ? "%" : ""}
    </button>
  );

  const inputText = <input type="number" onChange={selectRateFromTextBox} />;

  return <>{isButton ? inputButton : inputText}</>;
}

export default SelectTipButton;
