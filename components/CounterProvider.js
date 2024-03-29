import { createContext, useContext, useEffect, useState } from "react";


const CounterContext = createContext(0);
const ResetCounterContext = createContext(0);

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const resetCounterValue = () => {
    setCount(() => 0)
  };

  // Every 1000ms, trigger setCount
  useEffect(() => {
    setInterval(() => {
      setCount((currentCounter) => (currentCounter + 1))
    }, 1000)
  }, [])

  return (
    <CounterContext.Provider value={count}>
      <ResetCounterContext.Provider value={resetCounterValue}>
        {children}
      </ResetCounterContext.Provider>
    </CounterContext.Provider>
  )
}

export const useCounterValue = () => {
  return useContext(CounterContext);
};

export const useResetCounterValue = () => {
  return useContext(ResetCounterContext);
};