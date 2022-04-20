import React from "react";
import "./App.css";
import TesteComponent from "../components/testcomponent";
import ClassComponent from "../components/ClassComponent";
import Table from "../components/Table/Table";
import ComplextTable from "../components/ComplexTable/ComplextTable";
import { StyledColumn } from "../components/ComplexTable/StyledColumn";
import ComplexColumn from "../components/ComplexTable/ComplexColumn";

function App() {
  const headers: string[] = ["Header 1", "Header 2", "Header 3"];
  const data: any[] = [
    {
      values: ["Não tem mais jeito", "Acabou", "Boa sorte"],
      action: () => console.log("É isso 1"),
    },
    {
      values: ["Não tem mais jeito", "Acabou", "Boa sorte"],
      action: () => console.log("É isso 2"),
    },
    {
      values: ["Não tem mais jeito", "Acabou", "Boa sorte"],
      action: () => console.log("É isso 3"),
    },
    {
      values: ["Não tem mais jeito", "Acabou", "Boa sorte"],
      action: () => console.log("É isso 4"),
    },
    {
      values: ["Não tem mais jeito", "Acabou", "Boa sorte"],
      action: () => console.log("É isso 5"),
    },
  ];

  const dataNew = [
    {
      head1: "Teste",
      head2: "Teste 2",
    },
    {
      head1: "Teste",
      head2: "Teste 2",
    },
    {
      head1: "Teste",
      head2: "Teste 2",
    },
  ];

  return (
    <div className="App">
      <TesteComponent name="Teste Functional" />
      <ClassComponent name="Teste class" />
      <br></br>

      <Table headers={headers} data={data}></Table>
      <br></br>

      <ComplextTable values={dataNew}>
        <ComplexColumn header="head1" value={(item) => item.head1} />
        <ComplexColumn header="head2" value={(item) => item.head2} />
      </ComplextTable>
    </div>
  );
}

export default App;
