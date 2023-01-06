const fs = require("fs");
const path = require("path");

const { mdToPdf } = require("md-to-pdf");

function createMarkdown() {
  const markdown = [];
  const slides = fs.readdirSync(path.resolve("slides"));

  slides.forEach((slide) => {
    const slideMarkdown = fs.readFileSync(path.resolve(`slides/${slide}`), {
      encoding: "utf-8",
    });
    markdown.push(slideMarkdown);
    markdown.push("\n");
  });

  return markdown.join("");
}

async function generatePdf() {
  const markdown = createMarkdown();
  const pdf = await mdToPdf({ content: markdown }).catch(console.error);

  if (pdf) {
    fs.writeFileSync("treinamento-react.pdf", pdf.content);
  }
}

generatePdf();
