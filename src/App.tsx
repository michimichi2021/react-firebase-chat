import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";

const theme = createTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
