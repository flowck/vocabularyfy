/**
 * web scrapper
 */
const fs = require("fs");
const path = require("path");
const scrapeIt = require("scrape-it");

// ,
//     source: {
//       name: "Vocabulary.com",
//       url: URL
//     }

function handleError(error) {
  throw error;
}

async function scrapWebpage() {
  try {
    const URL = "https://www.vocabulary.com/lists/52473";
    const options = {
      words: {
        listItem: ".entry.learnable",
        data: {
          word: ".entry.learnable a.word",
          description: ".entry.learnable div.definition",
          example: ".entry.learnable .example",
        },
      },
    };

    const request = await scrapeIt(URL, options);
    return request.data;
  } catch (error) {
    handleError(error);
  }
}

function saveFile(filename, content) {
  try {
    fs.writeFileSync(path.join(__dirname, "../src/assets/", filename), content);
  } catch (error) {
    handleError(error);
  }
}

async function main() {
  const data = await scrapWebpage();
  saveFile("words.ts", `export default ${JSON.stringify(data.words)}`);
}

/**
 * Application runs from here :)
 */
main();
