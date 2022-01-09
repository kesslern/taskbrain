/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import { render } from "@testing-library/svelte";
import each from "jest-each";

import Background, { BackgroundColors } from "./Background.svelte";

describe("Background", () => {
  each([
    ...BackgroundColors.map((color) => [color, "white"]),
    ...BackgroundColors.map((color) => [color, "black"]),
  ]).test('dynamic element "%s"', (background, grid) => {
    const { getByTestId, debug } = render(Background, {
      background,
      grid,
      "data-testid": "test-background",
    });

    const element = getByTestId("test-background");
    expect(element).not.toBe(null);
  });
});
