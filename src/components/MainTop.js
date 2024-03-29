import React from "react";
import UpbringingM from "./Upbringing";

class MainTop extends React.Component {
  render() {
    return (
      <div className="main_top">
        <h3>
          <span>はじめまして</span>
          <span>Nice to meet you</span>
          <span>만나서 반갑습니다</span>
          <span>很高兴见到你</span>
        </h3>
        <div className="Upbringing-main">
          <UpbringingM />
        </div>
      </div>
    );
  }
}

export default MainTop;
