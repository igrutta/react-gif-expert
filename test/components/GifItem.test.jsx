import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem />", () => {
  // init
  const image = {
    title: "Título de prueba",
    url: "https://url.com/image.gif",
  };

  test("Debe hacer match con el snapshot", () => {
    // run
    const { container } = render(<GifItem {...image} />);

    // assert
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la imagen con el URL y el ALT indicado", () => {
    // run
    render(<GifItem {...image} />);

    // assert
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(image.url);
    expect(alt).toBe(image.title);
  });

  test("Debe mostrar el título en el componente como un párrafo", () => {
    // run
    render(<GifItem {...image} />);

    // assert
    expect(screen.getByText(image.title)).toBeTruthy;
  });
});
