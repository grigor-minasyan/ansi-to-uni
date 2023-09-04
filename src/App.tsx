import { useState } from "react";
import { TypographyH1 } from "./components/ui/TypographyH1";
import "./index.css";
import { Textarea } from "@/components/ui/textarea";
import { ansiToUnicodeConverter } from "./lib/utils";

function App() {
  const [convertedText, setConvertedText] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setConvertedText(ansiToUnicodeConverter(e.target.value));
  };

  return (
    <div className="p-4">
      <TypographyH1>Input (in ANSI)</TypographyH1>
      <Textarea onChange={handleInput} />
      <TypographyH1>Output (Unicode)</TypographyH1>
      <Textarea disabled value={convertedText} />
    </div>
  );
}

export default App;
