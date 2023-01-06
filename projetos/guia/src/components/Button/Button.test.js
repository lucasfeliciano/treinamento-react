import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

describe("Button component", () => {
  it("should render children", () => {
    const { getByRole } = render(<Button>Hey</Button>);

    expect(getByRole("button")).toHaveTextContent("Hey");
  });

  it("should handle on click", async () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick} />);

    await userEvent.click(getByRole("button"));

    expect(handleClick).toBeCalledTimes(1);
  });
});
