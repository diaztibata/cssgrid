import { createContext, useState, ReactNode, FC } from "react";

// Interfaz para el contexto
interface GridCssContextType {
  rows: number; 
  setRows: React.Dispatch<React.SetStateAction<number>>; 

  columns: number; 
  setColumns: React.Dispatch<React.SetStateAction<number>>; 

}

// Crear el contexto
export const GridCssContext = createContext<GridCssContextType | undefined>(undefined);

// Props para el proveedor
interface GridCssProviderProps {
  children: ReactNode;
}

// Proveedor del contexto
export const GridCssProvider: FC<GridCssProviderProps> = ({ children }) => {
  // Estado de las filas
  const [rows, setRows] = useState<number>(4);
  // Estado de las columnas
  const [columns, setColumns] = useState<number>(4);


  return (
    <GridCssContext.Provider
      value={{
        rows, setRows,
        columns, setColumns
      }}
    >
      {children}
    </GridCssContext.Provider>
  );
};
