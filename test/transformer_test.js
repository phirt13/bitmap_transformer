'use strict';

const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');

const transformer = require(__dirname + '/../lib/transformer');

var bitmapData = transformer.bitmapData;
console.log(bitmapData);


describe('blue color transform function', () => {
  it('should transform the bitmap to use blue color scale', () => {
    var blue = fs.readFileSync(__dirname + '/../img/blue.bmp');
    for(var i = 54; i < bitmapData.pixelArrayStart; i += 4) {
      expect(blue.readUInt8(i)).to.equal(255);
    }
  });
});

describe('green color transform function', () => {
  it('should transform the bitmap to use green color scale ie starting at 55 and then every 4', () => {
    var green = fs.readFileSync(__dirname + '/../img/green.bmp');
    for(var i = 54; i < bitmapData.pixelArrayStart; i += 4) {
      expect(green.readUInt8(i + 1)).to.equal(255);
    }
  });
});
