TO-DO:

- Crop Logo
- Header max-width
- add favIcon
- Gör headern loggan till en gå till homepage
- Breakpoints är helt OFF

  vi vill ha:

const breakpoints = {
base: "0em", // 0px
sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
md: "48em", // ~768px
lg: "62em", // ~992px
xl: "80em", // ~1280px
"2xl": "96em", // ~1536px
};

1. User inputs URL / User inputs text (skip step 3) **HomeScene**
2. Submits
3. Some package parse text content of link **OptionsScene**
4. (maybe) tokenize text **OptionsScene**
5. step 3 & 4 must be done before user presses generate quiz on optionsscene
6. Prompt is ready, and sends to OPENAI API **LoadingScene**
