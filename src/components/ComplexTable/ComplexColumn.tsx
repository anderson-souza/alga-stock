import React, { ReactNode } from "react";

export type Props<T> = {
  header: ReactNode;
  value(value: T, index: number): ReactNode;
};

const ComplexColumn = (props: Props<any>) => {
  return <></>;
};

export default ComplexColumn;
