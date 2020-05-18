import React, { useState, createContext } from "react";

export const MaleContext = createContext();
export const FemaleContext = createContext();
export const ModelCarrierContext = createContext();

export const MaleProvider = (props) => {
  const [male, setMale] = useState([""]);
  return (
    <MaleContext.Provider value={[male, setMale]}>
      {props.children}
    </MaleContext.Provider>
  );
};

export const FemaleProvider = (props) => {
  const [female, setFemale] = useState([""]);
  return (
    <FemaleContext.Provider value={[female, setFemale]}>
      {props.children}
    </FemaleContext.Provider>
  );
};

export const ModelCarrierProvider = (props) => {
  const [modelCarrier , setModelCarrier] = useState(["carry karnay wali sarkar"]);
  return (
    <ModelCarrierContext.Provider value={[modelCarrier, setModelCarrier]}>
      {props.children}
    </ModelCarrierContext.Provider>
  );

}
