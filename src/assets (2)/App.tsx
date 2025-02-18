import GridCount from "./assets/components/GridCount";
import CssGenerate from "./assets/components/CssGenerate";
import { GridCssProvider } from './assets/Context';

function App(): JSX.Element {

  return (
    <GridCssProvider>
      <GridCount />
      <CssGenerate />
    </GridCssProvider>
  )
}

export default App
