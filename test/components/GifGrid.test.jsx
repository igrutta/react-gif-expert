import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  // init
  const category = "Simpsons";

  test("Debe mostrar la categoría y el loading inicialmente", () => {
    // init
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    // run
    render(<GifGrid category={category} />);
    const title = screen.getByRole("heading", { level: 3 });
    const loadingText = screen.getByRole("heading", { level: 2 });

    // assert
    expect(title.innerHTML).toBe(category);
    expect(loadingText.innerHTML).toBe("Cargando...");
  });

  test("Debe mostrar items cuando se cargan las imágenes con useFetchGifs", () => {
    // init
    const gifs = [
      {
        id: "123456789",
        title: "Homero",
        url: "https://gif-api/homero.gif",
      },
      {
        id: "987654321",
        title: "Bart",
        url: "https://gif-api/bart.gif",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    // run
    render(<GifGrid category={category} />);
    const title = screen.getByRole("heading", { level: 3 });
    const images = screen.getAllByRole("img");

    // assert
    expect(title.innerHTML).toBe(category);
    expect(images.length).toBe(2);
  });
});
