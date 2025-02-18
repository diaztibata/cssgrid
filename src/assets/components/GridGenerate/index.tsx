import { useState } from "react";
import { useGridCssContext } from "../../Hook/useGridCssContext";
import ItemDeGrid from "../ItemDeGrid";
import "./style.css";

function GridGenerate(): JSX.Element {
  const { rows, columns } = useGridCssContext();

  // Estado para los elementos creados dinámicamente
  const [createdItems, setCreatedItems] = useState<{ row: number; col: number }[]>([]);

  // Crear los elementos iniciales de la grilla
  const cantidadElementos = Array.from({ length: columns * rows }, (_, index) => index);

  // Obtener el número de fila y columna de un índice
  const getRowId = (index: number): number => Math.floor(index / columns) + 1;
  const getColId = (index: number): number => (index % columns) + 1;

  // Función para crear un nuevo item al hacer clic
  const handleCreateItem = (row: number, col: number, num: number) => {
    setCreatedItems((prev) => [...prev, { row, col, num }]);
  };

  return (
    <>
    <section className="contenedor-grid-generada" style={{ width: columns * 120 }}>
      {/* Renderizar los items iniciales */}
      {cantidadElementos.map((_, index) => {
        const row = getRowId(index);
        const col = getColId(index);
        return (
          <div
            key={index}
            className="grid-item"
            id={`item-${row}-${col}`}
            onClick={() => handleCreateItem(row, col, index)} // Llamar a handleCreateItem al hacer clic
          >
            {`Item ${row}-${col}`}
          </div>
        );
      })}
    </section>
    <section>
            {createdItems.map((item, index) => (
        <ItemDeGrid key={`created-${index}`} gridRow={item.row} gridColumns={item.col} numberId={index} />
      ))}
    </section>
    </>
  );
}

export default GridGenerate;
