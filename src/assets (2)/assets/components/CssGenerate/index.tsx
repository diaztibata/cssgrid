import { useGridCssContext } from "../../Hook/useGridCssContext";

function CssGenerate(): JSX.Element {

  const { rows, columns } = useGridCssContext();
  

  return (
    <div>
      {rows} fila y {columns} columnas
    </div>
  )
}

export default CssGenerate