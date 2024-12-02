import StyleDictionary from "style-dictionary";

const sd = new StyleDictionary();

await (
  await sd.extend({
    source: ["src/tokens/dna-tokens.json"],
    platforms: {
      css: {
        transformGroup: "css",
        files: [
          {
            destination: "src/styles/dna-var.css",
            format: "css/variables",
            options: {
              selector: ":root.dna",
            },
          },
        ],
      },
    },
  })
).buildAllPlatforms();

await (
  await sd.extend({
    source: ["src/tokens/dna-dark-tokens.json"],
    platforms: {
      css: {
        transformGroup: "css",
        files: [
          {
            destination: "src/styles/dna-dark-var.css",
            format: "css/variables",
            options: {
              selector: ":root.dna-dark",
            },
          },
        ],
      },
    },
  })
).buildAllPlatforms();
