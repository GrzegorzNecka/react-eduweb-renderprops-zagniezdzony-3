// import React from "react";

// const MyComponent = props => (
//   <div>
//     <p> Hello world</p>
//     {props.render("Grzechu")}
//   </div>
// );

// const Patterns = () => (
//   <div>
//     <h2 className="title is-3">Patterns</h2>
//     <MyComponent render={data => <p>Hello {data}</p>} />
//   </div>
// );

// export default Patterns;

import React from "react";

const MyComponent = ({ children }) => (
  <div>
    <p> Hello world</p>
    {children("Grzechu")}
  </div>
);

const Patterns = () => (
  <div>
    <h2 className="title is-3">Patterns</h2>
    <MyComponent>{data => <p>Hello {data}</p>}</MyComponent>
  </div>
);

export default Patterns;
