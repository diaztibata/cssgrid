import { useContext } from "react";
import { GridCssContext } from "../../Context";

export const useGridCssContext = () => {
  const context = useContext(GridCssContext);

  if (!context) {
    throw new Error("useGridCssContext must be used within a GridCssProvider");
  }

  return context;
};
