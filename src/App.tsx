import GridCount from "./assets/components/GridCount";
import CssGenerate from "./assets/components/CssGenerate";
import GridGenerate from "./assets/components/GridGenerate";

import { GridCssProvider } from './assets/Context';

function App(): JSX.Element {

  return (
    <GridCssProvider>
      <GridCount />
      <GridGenerate />
      <CssGenerate />
    </GridCssProvider>
  )
}

export default App
