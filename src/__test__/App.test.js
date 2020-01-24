import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import { ExpansionPanelActions } from "@material-ui/core";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  //   const linkElement = getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});




describe('grupo de pruebas Login',()=>{

    test("prueba unit carga componente", () => {
        expect(10).toBe(10);
      });

      test("prueba unit carga componente 2", () => {
        expect(10).toBe(10);
      });
})

