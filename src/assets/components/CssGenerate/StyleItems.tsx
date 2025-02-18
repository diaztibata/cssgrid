interface StyleContainerProps {
    numberId: number;
    gridColumns: number;
    gridRow: number;
  }
  
  function StyleItems({ numberId, gridColumns, gridRow }: StyleContainerProps): JSX.Element {
    return (
      <>
      {`
      .item-contenedor-${numberId} {
            grid-column: span ${gridColumns} / span 1;
            grid-row: span ${gridRow} / span 1;
        }
      `}
      </>
    )
  }
  
export default StyleItems