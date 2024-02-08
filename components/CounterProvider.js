import { createContext, useContext, useEffect, useState } from "react";


const CounterContext = createContext(0);

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  // Every 1000ms, trigger setCount
  useEffect(() => {
    setInterval(() => {
      setCount((currentCounter) => (currentCounter + 1) % 360)
    }, 1000)
  }, [])

  return (


    <CounterContext.Provider value={count}>
      {children}
    </CounterContext.Provider>
  )
}

export const useCounterValue = () => {
  return useContext(CounterContext);
};