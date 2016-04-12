'use strict';

// TODO implement async testing for buffer read

const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');

var bitmap = fs.readFileSync(__dirname + '/../img/LAND2.bmp');

var bitmapData = {
  pixelArrayStart: bitmap.readUInt32LE(10)
};

describe('blue color transform function', () => {
  it('should transform the bitmap to use blue color scale', () => {
    var blue = fs.readFileSync(__dirname + '/../img/blue.bmp');
    for (var i = 54; i < bitmapData.pixelArrayStart; i += 4) {
      expect(blue.readUInt8(i)).to.eql(200);
    }
  });
});

describe('green color transform function', () => {
  it('should transform the bitmap to use green color scale', () => {
    var green = fs.readFileSync(__dirname + '/../img/green.bmp');
    for (var i = 54; i < bitmapData.pixelArrayStart; i += 4) {
      expect(green.readUInt8(i + 1)).to.eql(200);
    }
  });
});

describe('red color transform function', () => {
  it('should transform the bitmap to use red color scale', () => {
    var red = fs.readFileSync(__dirname + '/../img/red.bmp');
    for (var i = 54; i < bitmapData.pixelArrayStart; i += 4) {
      expect(red.readUInt8(i + 2)).to.eql(200);
    }
  });
});

describe('invert color transform function', () => {
  it('should transform the bitmap to invert colors', () => {
    var invert = fs.readFileSync(__dirname + '/../img/inverted.bmp');
    for (var i = 54; i < bitmapData.pixelArrayStart; i++) {
      expect(invert.readUInt8(i)).to.eql(255 - bitmap[i]);
    }
  });
});
