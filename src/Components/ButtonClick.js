import React, { useState } from "react";
import "../Styles/buttonclick.css";

function ButtonClick() {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const [history, setHistory] = useState([]);

  //   const [clear, setClear] = useState([]);
  const [container, setContainer] = useState({ value: 0 });

  const handleLftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    };

    setClicks(newClicks);
  };

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
    };

    setClicks(newClicks);
  };

  const clearLeftValue = () => {
    const resetClick = {
      ...clicks,
      left: (clicks.left = 0),
    };

    setClicks(resetClick);
  };

  const clearRighttValue = () => {
    const resetClick = {
      ...clicks,
      right: (clicks.right = 0),
    };

    setClicks(resetClick);
  };

  const clearRightValue = () => {
    const resetClick = {
      ...clicks,
      right: (clicks.right = 0),
    };

    setClicks(resetClick);
  };

  const addLeftContainer = () => {
    if (clicks.left === 0) return;

    console.log("hi");
    const containerClick = {
      ...container,
      value: clicks.left + container.value,
    };

    setContainer(containerClick);
    setHistory([...history, clicks.left]);
    clearLeftValue();
  };

  const addRightContainer = () => {
    if (clicks.right === 0) return;

    const containerClick = {
      ...container,
      value: clicks.right + container.value,
    };

    setContainer(containerClick);
    setHistory([...history, clicks.right]);
    clearRighttValue();
  };
  return (
    <>
      <h2>STATE COUNTER</h2>
      <div className="buttonclick">
        <section className="section__left">
          <button className="buttonclick__left" onClick={handleLftClick}>
            LEFT
          </button>
          <span className="value__container">{clicks.left}</span>

          <button className="add__container" onClick={addLeftContainer}>
            {" "}
            ADD TO CONTAINER
          </button>
          <button className="btnReset" onClick={clearLeftValue}>
            {" "}
            RESET
          </button>
        </section>

        <section className="section__right">
          <button className="buttonclick__right" onClick={handleRightClick}>
            RIGHT
          </button>
          <span className="value__container">{clicks.right}</span>
          <button className="add__container" onClick={addRightContainer}>
            {" "}
            ADD TO CONTAINER
          </button>
          <button className="btnReset" onClick={clearRightValue}>
            {" "}
            RESET
          </button>
        </section>

        <span className="btn_container">CONTAINER : {container.value}</span>
        <div className="history__container">
          <h4 className="history__header">HISTORY CONTAINER</h4>
          {history.map((items, index) => (
            <div className="added__items" key={index}>
              Recently added: {items}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ButtonClick;
