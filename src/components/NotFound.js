import React from "react";
import sorry from "./img/sorry.png";

class NotFound extends React.Component {
  render() {
    return (
      <div className="notfound">
        <h1>NOT FOUND 404</h1>
        <h3>お探しのページはみつかりませんでした。</h3>
        <img className="sorry-img" src={sorry} alt="sorry-img" />
      </div>
    );
  }
}
export default NotFound;
