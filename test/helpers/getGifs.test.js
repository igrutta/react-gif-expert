import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  // init
  const category = "Simpsons";

  test("Debe retornar un arreglo de gifs", async () => {
    // run
    const gifs = await getGifs(category);

    // assert
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
