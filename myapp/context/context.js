import { createContext, useState } from "react";

export const Dogs_data = createContext(null);

function Context({ children }) {
  const [dogsArr, setDogsArr] = useState();

  return (
    <Dogs_data.Provider value={(dogsArr, setDogsArr)}>
      {children}
    </Dogs_data.Provider>
  );
}

export default Context;