interface StyleContainerProps {
  rows: number;
  columns: number;
}

function StyleContainer({ rows, columns }: StyleContainerProps): JSX.Element {
  return (
    <>
    {
    `.parent {
        display: grid;
        grid-template-columns: repeat(${columns}, 1fr);
        grid-template-rows: repeat(${rows}, 1fr);
        gap: 8px;
    }
    `}
    </>
  )
}

export default StyleContainer