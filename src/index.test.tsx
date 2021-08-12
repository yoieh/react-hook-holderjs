import { renderHook } from "@testing-library/react-hooks";

describe("useHolderjs", () => {
  it("retruns nothing", () => {
    document.body.innerHTML = `
    <input id="newTodoInput" />
    <button id="addTodoBtn">Add todo</button>
    <ol id="todoList"></ol>
  `;

    HTMLCanvasElement.prototype.getContext = () => {
      // return whatever getContext has to return
      const toDataURL = (string: string) =>
        "data:" +
        string +
        ";base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";

      return {
        toDataURL
      };
    };

    const { useHolderjs } = require("./");
    const { result } = renderHook(() => useHolderjs());

    expect(result.current).toBe(undefined);
  });
});
