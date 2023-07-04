import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("Debe hacer match con el snapshot", () => {
    // run
    const { container } = render(<GifExpertApp />);

    // assert
    expect(container).toMatchSnapshot();
  });

  test("Debe contener el titulo de la aplicación", () => {
    // run
    render(<GifExpertApp />);
    const title = screen.getByRole("heading", { level: 1 });

    // assert
    expect(title.innerHTML).toBe("GifExpertApp");
  });

  test("Debe agregar una nueva categoría", () => {
    // init
    const inputValue = "Homero";

    // run
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    const category = screen.getByRole("heading", { level: 3 });

    // assert
    expect(category.innerHTML).toBe(inputValue);
  });

  test("No debe agregar una categoría si se repite", () => {
    // init
    const inputValue = "Homero";

    // run
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    const category = screen.getAllByRole("heading", { level: 3 });

    // assert
    expect(category).toHaveLength(1);
  });
});
