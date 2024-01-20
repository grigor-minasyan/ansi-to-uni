//initialize
const ANSI: number[] = [];
const UNICODE: number[] = [];

for (let i = 178; i <= 252; i += 2) {
  ANSI.push(i); //mecatar ANSI
  UNICODE.push(1328 + (i - 176) / 2); //mecatar Unicode
  ANSI.push(i + 1); //poqratar ANSI
  UNICODE.push(1376 + (i - 176) / 2); //poqratar Unicode
}
ANSI.push(168);
UNICODE.push(0x587); //ev

ANSI.push(183);
UNICODE.push(8226); //poqratar g-n (bullet)
ANSI.push(8226);
UNICODE.push(1379); //poqratar g-n (bullet)

ANSI.push(39);
UNICODE.push(0x55a); //apostrophe
ANSI.push(176);
UNICODE.push(0x55b); //shesht
ANSI.push(175);
UNICODE.push(0x55c); //bacakanchakan
ANSI.push(170);
UNICODE.push(0x55d); //but
ANSI.push(177);
UNICODE.push(0x55e); //harcakan
ANSI.push(163);
UNICODE.push(0x589); //verjaket
ANSI.push(173);
UNICODE.push(0x58a); //hyphen
ANSI.push(167);
UNICODE.push(0xab); //bacvogh chakert
ANSI.push(166);
UNICODE.push(0xbb); //pakvogh chakert
ANSI.push(171);
UNICODE.push(0x2c); //storaket
ANSI.push(169);
UNICODE.push(0x2e); //mijaket
ANSI.push(174);
UNICODE.push(0x2026); //bazmaket

ANSI.push(0, 0);
UNICODE.push(0, 0); //2 hat CUSTOM :)
// end

export function convertAnsiToUnicode(input: string) {
  let output = "";

  for (let i = 0; i < input.length; i++) {
    const tar = input.charCodeAt(i);

    let FromumKa = false;
    for (let j = 0; j < ANSI.length; j++) {
      if (tar === ANSI[j]) {
        // @ts-expect-error copied from another website
        if (UNICODE[j] == "") {
          console.log("found bug", UNICODE[j]);
          FromumKa = true;
          break;
        }
        output += String.fromCharCode(UNICODE[j]);
        FromumKa = true;
        break;
      }
    }
    if (!FromumKa) output += String.fromCharCode(tar);
  }
  return output
    .split("\n")
    .map((str) => str.trim())
    .join("\n")
    .replace(/ +/g, " ");
}

export const convertArmenianLettersToLatin = (input: string) => {
  const letters = {
    // upper
    Ա: "A",
    Բ: "B",
    Գ: "G",
    Դ: "D",
    Ե: "E",
    Զ: "Z",
    Է: "E",
    Ը: "Y",
    Թ: "T",
    Ժ: "ZH",
    Ի: "I",
    Լ: "L",
    Խ: "KH",
    Ծ: "TS",
    Կ: "K",
    Հ: "H",
    Ձ: "DZ",
    Ղ: "GH",
    Ճ: "J",
    Մ: "M",
    Յ: "Y",
    Ն: "N",
    Շ: "SH",
    // double check
    Ո: "O",
    Չ: "CH",
    Պ: "P",
    Ջ: "J",
    Ռ: "R",
    Ս: "S",
    Վ: "V",
    Տ: "T",
    Ր: "R",
    Ց: "TS",
    ՈՒ: "U",
    Փ: "P",
    Ք: "Q",
    Օ: "O",
    Ֆ: "F",
    // lower
    ա: "a",
    բ: "b",
    գ: "g",
    դ: "d",
    ե: "e",
    զ: "z",
    է: "e",
    ը: "y",
    թ: "t",
    ժ: "zh",
    ի: "i",
    լ: "l",
    խ: "kh",
    ծ: "ts",
    կ: "k",
    հ: "h",
    ձ: "dz",
    ղ: "gh",
    // double check
    ճ: "j",
    մ: "m",
    յ: "y",
    ն: "n",
    շ: "sh",
    // double check
    ո: "o",
    չ: "ch",
    պ: "p",
    ջ: "j",
    ռ: "r",
    ս: "s",
    վ: "v",
    տ: "t",
    ր: "r",
    ց: "ts",
    ու: "u",
    փ: "p",
    ք: "q",
    օ: "o",
    ֆ: "f",

    //
    և: "Yev",
    եւ: "yev",
  } as Record<string, string>;

  return input
    .split("")
    .map((letter) => letters[letter] || letter)
    .join("");
};
