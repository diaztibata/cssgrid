interface ItemDeGridProps {
    gridRow: number;
    gridColumns: number;
    numberId: number;
  }
  
  function ItemDeGrid({ gridRow, gridColumns, numberId }: ItemDeGridProps): JSX.Element {
    return (
      <div className="item-contenedor">
        {`col ${gridColumns} row ${gridRow} ${numberId}
        }`}
      </div>
    );
  }
  
  export default ItemDeGrid;
  