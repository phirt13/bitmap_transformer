'use strict';

const fs = require('fs');
const colorChange = require(__dirname + '/color-change');

var readBitmap = function(filePath) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      throw error;
    }
    var bitmap = data;
    writeData(bitmap);
  });
};

function writeData(buffer) {
  var bitmapData = {
    headField: buffer.toString('ascii', 0, 2),
    size: buffer.toString('ascii', 0, 2),
    pixelArrayStart: buffer.readUInt32LE(10),
    paletteColors: buffer.readUInt32LE(46),
    firstBlue: buffer.readUInt8(54),
    firstGreen: buffer.readUInt8(55),
    firstRed: buffer.readUInt8(56),
    firstAlpha: buffer.readUInt8(57)
  };

  if (process.argv[2]) {
    var transformChoice = process.argv[2];
    if (transformChoice.toLowerCase() === 'blue') {
      colorChange.bitTransformer.blueTint(buffer, bitmapData);
    } else if (transformChoice.toLowerCase() === 'green') {
      colorChange.bitTransformer.greenTint(buffer, bitmapData);
    } else if (transformChoice.toLowerCase() === 'red') {
      colorChange.bitTransformer.redTint(buffer, bitmapData);
    } else if (transformChoice.toLowerCase() === 'greyscale') {
      colorChange.bitTransformer.greyscale(buffer, bitmapData);
    } else if (transformChoice.toLowerCase() === 'invert') {
      colorChange.bitTransformer.invertColors(buffer, bitmapData);
    } else {
      process.stdout.write('We do not have the technology for that\n');
    }
  } else {
    process.stdout.write('What a NOOB!!! No transform for you!\n\nRead the README sucka\n');
  }
}

exports.readBitmap = readBitmap;
