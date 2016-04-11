'use strict';

const fs = require('fs');
const bitmap = require(__dirname + '/bitmap-data');
const EE = require('events');

const ee = new EE();

ee.on('runOne', function() {
  bitmap.readBitmap(__dirname + '/../img/palette-bitmap.bmp');
  ee.emit('runTwo');
});

ee.emit('runOne');

ee.on('runTwo', function() {
  console.log(bitmap.bitmapData);
});

var bitmapData = bitmap.bitmapData;

// var first = bitmap.readUInt8(54); //same as above but with readUInt8
                                  //instead console.log() bitmap.writeUInt8(255, 54); //make that paletteColor blue

// var bitTransformer = exports.bitTransformer =  {
//   changeColorBlue : function() {
//     console.log('first color = ' + bitmap[54]);
//     for(var i = 54; i < bitmapData.pixelArrayStart; i += 4) {
//       bitmap.writeUInt8(255, i);
//     }
//     console.log('first color = ' + bitmap[54]);
//     fs.writeFileSync(__dirname +'/../img/blue.bmp', bitmap);
//   },
//
//   changeColorGreen : function() {
//     console.log('second color = ' + bitmap[55]);
//     for(var i = 54; i < bitmapData.pixelArrayStart; i += 4) {
//       bitmap.writeUInt8(255, i + 1);
//     }
//     console.log('second color = ' + bitmap[55]);
//     fs.writeFileSync(__dirname + '/../img/green.bmp', bitmap);
//   },
//
//   changeColorRed : function() {
//     console.log('third color = ' + bitmap[56]);
//     for(var i = 54; i < bitmapData.pixelArrayStart; i += 4) {
//       console.log(i);
//       bitmap.writeUInt8(255, i + 2);
//     }
//     console.log('third color = ' + bitmap[56]);
//     fs.writeFileSync(__dirname + '/../img/red.bmp', bitmap);
//   },
//
//   invertColors : function() {
//     for(var i = 54; i < bitmapData.pixelArrayStart; i++) {
//       bitmap.writeUInt8(255 - bitmap[i], i);
//     }
//     fs.writeFileSync(__dirname + '/../img/inverted.bmp', bitmap);
//   }
// }
//
// bitTransformer.invertColors();
// console.log(bitmapData.paletteColors);
