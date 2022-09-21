import { render } from "react-dom";
 // imports Broswer router & Route(s) to dom
import 
{ BrowserRouter,
  Routes,
  Route  } from "react-router-dom";
import App from "./App";
import Expenses from "./src/routes/expenses";
import Invoices from "./src/routes/invoices";
import Invoice from "./src/routes/invoice";

const rootElement = document.getElementById("root");
render(
  //Connects the app to URL of browser
  <BrowserRouter>
    <Routes>
      {/* Adds the functionality of the routes and shows where the corresponding Links will lead to when clicked */}
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
      <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
      {/* renders a specific invoice, based on the ID */}
      <Route path=":invoiceId" element={<Invoice />} />
      {/* Route for a "404 type"page/blank page/outside scope of site content */}
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>,
  rootElement
);