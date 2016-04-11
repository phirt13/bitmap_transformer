'use strict';

// TODO make sure all headers are present

const fs = require('fs');
const colorChange = require(__dirname + '/colorChange');

var readBitmap = function(filePath) {
  console.log('running');
  var readBitmap = function(filePath) {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        throw error;
      }
      console.log('found file here is some data');
      var bitmap = data;
      writeData(bitmap);
    });
  };
  readBitmap(filePath);
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
      colorChange.bitTransformer.changeColorBlue(buffer, bitmapData);
    }
    if (transformChoice.toLowerCase() === 'green') {
      colorChange.bitTransformer.changeColorGreen(buffer, bitmapData);
    }
    if (transformChoice.toLowerCase() === 'red') {
      colorChange.bitTransformer.changeColorRed(buffer, bitmapData);
    }
    if (transformChoice.toLowerCase() === 'invert') {
      colorChange.bitTransformer.invertColors(buffer, bitmapData);
    }
  } else {
    console.log('What a NOOB!!! No transform for you! Read the README sucka');
  }
}

exports.readBitmap = readBitmap;
