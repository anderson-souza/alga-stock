import styled from "styled-components";

export const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const StyledTbody = styled.tbody`
  tr {
    cursor: pointer;
    line-height: 40px;
    &:hover {
      background-color: gray;
    }
  }
`;

export const StyledTr = styled.tr``;
