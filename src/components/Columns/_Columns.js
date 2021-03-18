import React from "react";
import withCollapse from "./../../hoc/withCollapse";

// columns to element Tips.js

const Columns = ({ isCollapsed }) => {
  return (
    <div className="columns">
      <div className="column">
        <button className="button is-dark is-large">collapse</button>
        <div className={isCollapsed && `is-Collapsed`}>
          <div className="column">
            <div className="notification is-primary">ss</div>
          </div>
          <div className="column">
            <div className="notification is-primary">Second column</div>
          </div>
          <div className="column">
            <div className="notification is-primary">Third column</div>
          </div>
          <div className="column">
            <div className="notification is-primary">Fourth column</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withCollapse(Columns);
