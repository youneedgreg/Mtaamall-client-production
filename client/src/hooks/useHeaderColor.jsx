import { useState, useEffect } from "react";

const useHeaderColor = () => {
  const [headerColor, setHeaderColor] = useState("#f6052d");

  // useEffect is not needed if color should be constant
  useEffect(() => {
    setHeaderColor("#f6052d");
  }, []);

  return headerColor;
};

export default useHeaderColor;
