import React from "react";
import { StyledTable, StyledTbody, StyledTr } from "./style";

type Props = {
  headers: string[];
  data: any[];
};

const Table = (props: Props) => {
  return (
    <StyledTable>
      <thead>
        <StyledTr>
          {props.headers.map((header, index) => {
            return <th key={index}>{header}</th>;
          })}
        </StyledTr>
      </thead>
      <StyledTbody>
        {props.data.map((row, index) => {
          return (
            <StyledTr onClick={row.action} key={index}>
              koé
              {row.values.map((cell: any) => {
                return <td>{cell}</td>;
              })}
            </StyledTr>
          );
        })}
      </StyledTbody>
    </StyledTable>
  );
};

export default Table;
