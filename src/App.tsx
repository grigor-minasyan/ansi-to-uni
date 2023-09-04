import { useState } from "react";
import { TypographyH1 } from "./components/ui/TypographyH1";
import "./index.css";
import { Textarea } from "@/components/ui/textarea";
import { convertAnsiToUnicode } from "./lib/ansiToUnicodeConverter";
import { Button } from "./components/ui/button";

function App() {
  const [convertedText, setConvertedText] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setConvertedText(convertAnsiToUnicode(e.target.value));
  };

  return (
    <div className="p-4">
      <TypographyH1>Input (in ANSI)</TypographyH1>
      <Textarea rows={10} onChange={handleInput} />
      <TypographyH1>Output (Unicode)</TypographyH1>
      <Textarea rows={10} readOnly value={convertedText} />
      <Button
        className="my-2"
        onClick={() => navigator.clipboard.writeText(convertedText)}
      >
        Copy to clipboard
      </Button>
    </div>
  );
}

export default App;
