import React, { createContext, useState } from 'react';

export const Myprovider = createContext();

function Gdata({ children }) {
  const [DataValue, setDataValue] = useState(null);
  return (
    <Myprovider.Provider value={{ DataValue, setDataValue }}>
      {children}
    </Myprovider.Provider>
  );
}

export default Gdata;
