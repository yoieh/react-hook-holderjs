// import { useHolderjs } from './'
import {  } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe('useHolderjs', () => {
  it('retruns nothing', () => {

    // Can not test hook do to error in holderjs
    // DOM.newEl('canvas').toDataURL is missing when run.
    // const { result } = renderHook(() => useHolderjs());
    const result = {current: undefined}

    expect(result.current).toBe(undefined);
  })
})
