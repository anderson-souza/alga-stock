import React from "react";

class ClassComponent extends React.Component<{ name: string }> {
  state = {
    name: "Mundão véio sem porteira",
  };

  render(): React.ReactNode {
    return (
      <div>
        <p>Hello {this.state.name} viadão</p>
        <button
          onClick={() => {
            this.setState({ name: "Teste" });
          }}
        >
          Click em nois
        </button>
      </div>
    );
  }
}

export default ClassComponent;
