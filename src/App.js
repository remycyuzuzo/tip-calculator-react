import SelectTipButton from "./components.js/SelectTipButton";
import logo from "./logo.svg";
import dollarIcon from "./images/icon-dollar.svg";
import userIcon from "./images/icon-person.svg";

import { useEffect, useState } from "react";

function App() {
  const [tipRate, setTipPercentage] = useState(0);
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [result, setResult] = useState({ totalTip: 0, tipPerPerson: 0 });
  const [customMode, updateCustomMode] = useState(false);

  const changeSelectionMode = (result) => {
    updateCustomMode(result);
  };

  const setTipRate = (percentage) => {
    setTipPercentage(percentage);
  };

  const updateBill = (event) => {
    setBill(event.target.value);
  };

  const updateNumberOfPeople = (event) => {
    setNumberOfPeople(parseInt(event.target.value));
  };

  const reset = () => {
    setTipPercentage(0);
    setBill(0);
    setNumberOfPeople(0);
  };

  useEffect(() => {
    console.log("state updated!");
    const totalTip = (bill * tipRate) / 100;
    let tipPerPerson = 0;
    if (!isNaN(numberOfPeople) && numberOfPeople != 0) {
      tipPerPerson = totalTip / numberOfPeople;
    }
    setResult({
      totalTip,
      tipPerPerson,
    });
  }, [tipRate, bill, numberOfPeople]);

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="app">
        <header>
          <h1 className="text-center">
            <img src={logo} alt="logo" />
          </h1>
        </header>
        <div className="body">
          <div className="calculator d-flex justify-content-between">
            <div className="form">
              <form>
                <p className="label">Bill</p>
                <div className="bill d-flex justify-content-between">
                  <div className="dollar-sign">
                    <img src={dollarIcon} alt="dollar icon" />
                  </div>
                  <input
                    type="text"
                    className="input-control"
                    onChange={updateBill}
                    value={bill ? bill : ""}
                  />
                </div>
                <div className="select-tip-buttons">
                  <p className="label">Select tip %</p>
                  <div className="buttons">
                    <SelectTipButton
                      percentage={5}
                      onClickToSelect={{
                        tipRate: setTipRate,
                        custom: changeSelectionMode,
                      }}
                    />
                    <SelectTipButton
                      percentage={10}
                      onClickToSelect={{
                        tipRate: setTipRate,
                        custom: changeSelectionMode,
                      }}
                    />
                    <SelectTipButton
                      percentage={15}
                      onClickToSelect={{
                        tipRate: setTipRate,
                        custom: changeSelectionMode,
                      }}
                    />
                    <SelectTipButton
                      percentage={25}
                      onClickToSelect={{
                        tipRate: setTipRate,
                        custom: changeSelectionMode,
                      }}
                    />
                    <SelectTipButton
                      percentage={50}
                      onClickToSelect={{
                        tipRate: setTipRate,
                        custom: changeSelectionMode,
                      }}
                    />
                    <SelectTipButton
                      percentage={"custom"}
                      onClickToSelect={{
                        tipRate: setTipRate,
                        custom: changeSelectionMode,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <p className="label">Number of people</p>
                  <div className="bill d-flex justify-content-between">
                    <div className="dollar-sign">
                      <img src={userIcon} alt="Person icon" />
                    </div>
                    <input
                      type="text"
                      className="input-control"
                      onChange={updateNumberOfPeople}
                      value={numberOfPeople ? numberOfPeople : ""}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="display d-flex flex-column justify-content-between">
              <div>
                <div className="tip-per-person d-flex justify-content-between align-items-center">
                  <div>
                    <div className="m-title">Total amount</div>
                    <div className="m-sharers">/ person</div>
                  </div>
                  <div className="money">${result.totalTip}</div>
                </div>
                <div className="total-tip d-flex justify-content-between align-items-center">
                  <div>
                    <div className="m-title">Tip amount</div>
                    <div className="m-sharers">/ person</div>
                  </div>
                  <div className="money">${result.tipPerPerson}</div>
                </div>
              </div>
              <button
                className="reset"
                disabled={
                  bill !== 0 || tipRate !== 0 || numberOfPeople !== 0
                    ? false
                    : true
                }
                onClick={reset}
              >
                RESET
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>Challenge by Front End Mentor, Coded by Remy</p>
        </div>
      </div>
    </div>
  );
}

export default App;
