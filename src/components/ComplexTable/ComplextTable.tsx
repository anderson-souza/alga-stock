import React, { ReactElement } from "react";
import { StyledTable, StyledTbody } from "../Table/style";
import { Props as ColumnProps } from "./ComplexColumn";

type Props<T> = {
  values: any[];
  children: ReactElement<ColumnProps<T>>[];
};

const ComplextTable = (props: Props<any>) => {
  const { children } = props;

  return (
    <StyledTable>
      <thead>
        {React.Children.forEach(children, (element) => {
          const { header } = element.props;

          console.log("header", header);
          return;
        })}
        <></>
      </thead>
      <StyledTbody>
        {React.Children.toArray(props.children)
          .filter((column) => !!column)
          .map((value, index) => (
            <td key={index}>{value}</td>
          ))}
      </StyledTbody>
    </StyledTable>
  );
};

export default ComplextTable;
