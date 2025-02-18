import { useState } from "react";
import { useGridCssContext } from "../../Hook/useGridCssContext";
import StyleContainer from "./StyleContainer";
import StyleItems from "./StyleItems";

function CssGenerate(): JSX.Element {

  const { rows, columns } = useGridCssContext();
  
  // Estado para los elementos creados dinámicamente
  const [cssItems, setCssItems] = useState<{ row: number; col: number }[]>([]);
  setCssItems;
  return (
    <div className="contenedor-estilos">
      <pre>
        <code>
          <StyleContainer rows={rows} columns={columns} />
          {cssItems.map((item, index) => (
            <StyleItems numberId={index} gridColumns={item.col} gridRow={item.row} />
            
          ))}
        </code>
      </pre>
    </div>
  )
}

export default CssGenerate