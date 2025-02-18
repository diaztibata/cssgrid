import { useContext } from "react";
import { GridCssContext } from "../../Context";


function GridCount(): JSX.Element {
  const context = useContext(GridCssContext);

  if (!context) {
    throw new Error("GridCount must be used within a GridCssProvider");
  }

  const { rows, setRows, columns, setColumns } = context;
  
  return (
    <div>
      <div className='contador-grid'>
        <p>Número de columnas {columns}</p>
        <button onClick={() => setColumns((prev) => (prev < 12 ? prev + 1 : prev))}>+</button>
        <button onClick={() => setColumns((prev) => Math.max(prev - 1, 1))}>-</button>
      </div>
      <div className='contador-grid'>
        <p>Número de filas {rows}</p>
        <button onClick={() => setRows((prev) => (prev < 12 ? prev + 1 : prev))}>+</button>
        <button onClick={() => setRows((prev) => Math.max(prev - 1, 1))}>-</button>
      </div>
    </div>
  )
}

export default GridCount