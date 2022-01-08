/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import { render } from "@testing-library/svelte";
import each from "jest-each";

import Button from "./Button.svelte";

describe("Button", () => {
  test("rendering", () => {
    const { getByText } = render(Button, {
      label: "TestButton",
    });

    expect(getByText("TestButton")).toBeInTheDocument();
  });

  test("class forwarding", () => {
    const { getByText } = render(Button, {
      class: "test-class",
      label: "TestButton",
    });

    expect(getByText("TestButton")).toHaveClass("test-class");
  });

  test("disabled state", () => {
    const { getByText } = render(Button, {
      disabled: true,
      label: "TestButton",
    });

    expect(getByText("TestButton")).toHaveAttribute("disabled");
  });

  each([["a"], ["button"], ["input"]]).test('dynamic element "%s"', (e) => {
    const { getByTestId, debug } = render(Button, {
      element: e,
      label: "TestButton",
      "data-testid": "test-button",
    });

    const element = getByTestId("test-button");
    expect(element.tagName).toBe(e.toUpperCase());
  });
});
