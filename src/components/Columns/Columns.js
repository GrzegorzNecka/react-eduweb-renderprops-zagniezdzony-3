import React from "react";
import withCollapse from "./../../hoc/withCollapse";
import withAuth from "./../../hoc/withAuth";

const Columns = ({ isCollapsed, toggle, isAuthorized, toggleAuth }) => {
  return (
    <div className="columns">
      <div className="column">
        <p> is Authorized {isAuthorized.toString()}</p>

        <button onClick={toggleAuth} className=" button is-dark is-large">
          login
        </button>

        {isAuthorized ? (
          <>
            <button onClick={toggle} className=" button is-dark is-large">
              collapse
            </button>
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
            </div>{" "}
          </>
        ) : (
          <p> you must authorize</p>
        )}
      </div>
    </div>
  );
};

export default withAuth(withCollapse(Columns));

/**
 * 
 * lepszy zapis jest z biblioteką recompose 
  
  export default compose(
   withAuth
   withCollapse
  )(Columns)


 */
