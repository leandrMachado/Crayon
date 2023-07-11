const ansi_colors = require("./ansi-styles/ansi.json");


const colors = {
  get red() {
    const red = (string) => {
      return applyOptions(string, "\u001b[38;2;255;70;70m")
    }

    red.bold = (string) => {
      return applyOptions(string, "\u001b[1;38;2;255;70;70m")
    }

    return red;
  }
}

class crayon {
  constructor() {
    return Object.assign(this, colors)
  }
}

const applyOptions = (string, color) => {
  return color + string + "\x1b[0m";
}

module.exports = new crayon();
