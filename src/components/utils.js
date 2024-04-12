var generatedColors = [];

export function generateRandomColor(opacity = 0.8) {
  var colorCode;
  var isUnique = false;

  // Loop until a unique color is generated
  while (!isUnique) {
    // Generate random values for red, green, and blue components
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // Convert decimal values to hexadecimal and format them
    var redHex = red.toString(16).padStart(2, "0");
    var greenHex = green.toString(16).padStart(2, "0");
    var blueHex = blue.toString(16).padStart(2, "0");

    // Concatenate the values to form a color code
    colorCode = "#" + redHex + greenHex + blueHex;

    // Append opacity to the color code
    var rgbaColor =
      colorCode +
      Math.round(opacity * 255)
        .toString(16)
        .padStart(2, "0");

    // Check if the generated color is unique
    if (!generatedColors.includes(rgbaColor)) {
      isUnique = true;
      generatedColors.push(rgbaColor);
    }
  }

  return rgbaColor;
}
