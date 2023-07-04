import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe regresar el estado inicial", () => {
    // run
    const { result } = renderHook(() => useFetchGifs("Homero"));
    const { images, isLoading } = result.current;

    // assert
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe retornar un arreglo de imagenes y isLoading en false", async () => {
    // run
    const { result } = renderHook(() => useFetchGifs("Homero"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    // assert
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
