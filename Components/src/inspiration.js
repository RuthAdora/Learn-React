import * as React from "react";
import quotes from "./quotes";
import FancyText from "./fancyText";

export default function InspirationGenerator({ children }) {
  const [index, setIndex] = React.useState(0);
  const quote = quotes[index];
  const next = () => setIndex((index + 1) % quotes.length);

  return (
    <>
      <p>Paw inspirational quote:</p>
      <FancyText text={quote} />
      <button onClick={next}>Inspire me </button>
      {children}
    </>
  );
}
