// Set the data theme attribut and checks if code is running in browser and if theme exists
export async function setTheme(
  themeName: string | null
): Promise<string | undefined> {
  if (typeof window !== "undefined") {
    if (themeName && themeList.includes(themeName)) {
      document.documentElement.setAttribute("data-theme", themeName);
      return themeName;
    }
    return undefined;
  }
}

// Keep in sync with themes defined in tailwind.config.js
export const themeList = [
  "winter",
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  //"aqua",
  "lofi",
  "pastel",
  "fantasy",
  //"wireframe",
  //"black",
  //"luxury",
  "dracula",
  "cmyk",
  "autumn",
  //"business",
  "acid",
  //"lemonade",
  "night",
  //"coffee",
];
