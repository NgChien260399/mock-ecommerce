import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import NavComponent from "./components/NavComponent/NavComponent";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <>
                {!route.isBlank ? (
                  <>
                    <HeaderComponent />
                    <NavComponent />
                    <route.page />
                    <FooterComponent />
                  </>
                ) : (
                  <route.page />
                )}
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
