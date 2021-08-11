import { useHolderjs } from "./";
import { renderHook } from "@testing-library/react-hooks";

describe("ExampleComponent", () => {
  it("retruns nothing", () => {
    const { result } = renderHook(() => useHolderjs());

    expect(result.current).toBe(undefined);
  });
});
