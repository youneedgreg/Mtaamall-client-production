import { useState, useEffect } from "react";

const useHeaderColor = () => {
  const [headerColor, setHeaderColor] = useState("white");

  // useEffect is not needed if color should be constant
  useEffect(() => {
    setHeaderColor("white");
  }, []);

  return headerColor;
};

export default useHeaderColor;
