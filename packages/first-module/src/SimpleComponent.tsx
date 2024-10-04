import type { FC, ReactNode } from "react";

export const SimpleComponent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        border: "2px solid black",
        width: "auto",
        height: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default SimpleComponent;
