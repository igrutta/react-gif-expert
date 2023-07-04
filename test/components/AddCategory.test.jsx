import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("Debe cambiar el valor de la caja de texto", () => {
    // init
    const inputValue = "Homero";

    // run
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: inputValue } });

    // assert
    expect(input.value).toBe(inputValue);
  });

  test("Debe llamar a onAddCategory si el input tiene un valor", () => {
    // init
    const inputValue = "Homero";
    const onAddCategory = jest.fn();

    // run
    render(<AddCategory onAddCategory={onAddCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    // assert
    expect(input.value).toBe("");

    expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(inputValue);
  });

  test("No debe llamar a onAddCategory si el input está vacío", () => {
    // init
    const onAddCategory = jest.fn();

    // run
    render(<AddCategory onAddCategory={onAddCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    // assert
    expect(onAddCategory).toHaveBeenCalledTimes(0);
    expect(onAddCategory).not.toHaveBeenCalled();
  });
});
