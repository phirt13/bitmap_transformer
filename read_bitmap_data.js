'use strict';

const fs = require('fs');

let bitmap = fs.readFileSync(__dirname + '/img/palette-bitmap.bmp');

let bitmapData = {
  headField : bitmap.toString('ascii', 0, 2),
  size : bitmap.toString('ascii', 0, 2),
  pixelArrayStart : bitmap.readUInt32LE(10),
  paletteColors : bitmap.readUInt32LE(46)
};

console.log(bitmapData);
console.log('first color = ' + bitmap[54]);
var first = bitmap.readUInt8(54); //same as above but with readUInt8 instead console.log() will use to write properly
bitmap.writeUInt8(255, 54); //make that paletteColor blue

var bitTransformer =  {
  changeColorBlue : function() {
    for(var i = 54; i < bitmapData.pixelArrayStart; i += 4) {
      bitmap.writeUInt8(255, i);
    }
    console.log('first color = ' + bitmap[54]);
    fs.writeFileSync('./img/invertedFile.bmp', bitmap);
  },

  changeColorGreen : function() {
    console.log('second color = ' + bitmap[55]);
    for(var i = 54; i < bitmapData.pixelArrayStart; i += 4) {
      bitmap.writeUInt8(255, i + 1);
    }
    console.log('second color = ' + bitmap[55]);
    fs.writeFileSync(__dirname + '/img/green.bmp', bitmap);
  },

  changeColorRed : function() {
    console.log('third color = ' + bitmap[56]);
    for(var i = 54; i < bitmapData.pixelArrayStart; i += 4) {
      console.log(i);
      bitmap.writeUInt8(255, i + 2);
    }
    console.log('third color = ' + bitmap[56]);
    fs.writeFileSync(__dirname + '/img/red.bmp', bitmap);
  },

  invertColors : function() {
    for(var i = 54; i < bitmapData.pixelArrayStart; i++) {
      bitmap.writeUInt8(255 - i, i);
    }
    fs.writeFileSync(__dirname + '/img/invert.bmp', bitmap);
  }
}

bitTransformer.invertColors();
console.log(bitmapData.paletteColors);
