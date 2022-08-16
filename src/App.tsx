import { createTheme, ThemeProvider } from "@mui/material/styles"

import Signup from "./Signup"

const theme = createTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Signup />
    </ThemeProvider>
  )
}

export default App
