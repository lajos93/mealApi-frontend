import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import routeData from "react-router";

import MockResponseData from "./MockResponseData";
import Results from "../components/Pages/Results/Results";
import userEvent from "@testing-library/user-event";

describe("Results component", () => {
  const useLocation = jest.spyOn(routeData, "useLocation");

  beforeEach(() => {
    useLocation.mockReturnValue({});
  });

  it("renders data into their respective table", async () => {
    render(<Results data={MockResponseData} />);

    const tableName = screen.getByTestId("tableName");
    const tableIMG = screen.getByTestId("tableIMG");
    const tableIngredients = screen.getByTestId("tableIngredients");
    const tableInstructions = screen.getByTestId("tableInstructions");

    expect(tableName.textContent).toBe("Pizza Express Margherita");
    expect(tableIMG).toHaveAttribute(
      "src",
      "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg"
    );
    expect(tableIngredients.textContent).toBe("WaterSugarYeast");
    expect(tableInstructions).toHaveTextContent("1 Preheat the oven to 230");
  });

  it("checks ingredients toggle btn", async () => {
    render(<Results data={MockResponseData} />);

    const tableIngredients = screen.getByTestId("tableIngredients");

    const expandIngredientsBtn = screen.getByTestId("expandIngredients");

    // open toggle
    userEvent.click(expandIngredientsBtn);

    expect(tableIngredients.textContent).toBe(
      "WaterSugarYeastPlain FlourSaltOlive OilPassataMozzarellaOreganoBasilBlack Pepper"
    );

    // close toggle
    userEvent.click(expandIngredientsBtn);

    expect(tableIngredients.textContent).toBe("WaterSugarYeast");
  });
});
