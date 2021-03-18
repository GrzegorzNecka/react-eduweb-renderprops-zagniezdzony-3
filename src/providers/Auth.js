//  https://eduweb.pl/programowanie-i-www/reactjs/react-techniki-zaawansowane/stworzenie-pierwszego-hoc

import React from "react";

//hoc to funkckja przyjmuje jako parametr comonent ... dodaje do niego pewne właściwości i zwraca

const WithCollapse = WrapComponent => {
  return class WithCollapse extends React.Component {
    state = {
      isCollapsed: false
    };

    toggle = () => {
      this.setState(prevState => ({
        isCollapsed: !prevState.isCollapsed
      }));
    };

    // z komponentu klasowego zwracam funkcję callback (komponent funkcyjny)

    render() {
      const { isCollapsed } = this.state;

      return (
        <WrapComponent
          isCollapsed={isCollapsed}
          toggle={this.toggle}
          {...this.props}
        />
      );
    }
  };
};

export default WithCollapse;

// w pliku columnns

//export default withCollapse(Columns) że WrapComponent  === Columns
