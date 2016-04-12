'use strict';

const fs = require('fs');
require(__dirname + '/transformer');

var bitTransformer = {
  blueTint: function(data, header) {
    process.stdout.write('tinting blue...');
    for (var i = 54; i < header.pixelArrayStart; i += 4) {
      data.writeUInt8(200, i);
    }
    fs.writeFile(__dirname + '/../img/blue.bmp', data, (error) => {
      if (error) throw error;
      process.stdout.write('\n\nTransformed to blue tint. To view:' +
                            '\n\nopen img/blue.bmp\n\nDONE\n');
    });
  },

  greenTint: function(data, header) {
    process.stdout.write('tinting green...');
    for (var i = 54; i < header.pixelArrayStart; i += 4) {
      data.writeUInt8(200, i + 1);
    }
    fs.writeFile(__dirname + '/../img/green.bmp', data, (error) => {
      if (error) throw error;
      process.stdout.write('\n\nTransformed to green tint. To view:' +
                            '\n\nopen img/green.bmp\n\nDONE\n');
    });
  },

  redTint: function(data, header) {
    process.stdout.write('tinting red...');
    for (var i = 54; i < header.pixelArrayStart; i += 4) {
      data.writeUInt8(200, i + 2);
    }
    fs.writeFile(__dirname + '/../img/red.bmp', data, (error) => {
      if (error) throw error;
      process.stdout.write('\n\nTransformed to red tint. To view:' +
                            '\n\nopen img/red.bmp\n\nDONE\n');
    });
  },

  greyscale: function(data, header) {
    process.stdout.write('greyscaling...');
    for (var i = 54; i < header.pixelArrayStart; i++) {
      var greyscale = ((data[i] + data[i + 1] + data[i + 2] + data[i + 3]) / 4);
      data.writeUInt8(greyscale, i);
    }
    fs.writeFile(__dirname + '/../img/greyscale.bmp', data, (error) => {
      if (error) throw error;
      process.stdout.write('\n\nTransformed to greyscale. To view:' +
                            '\n\nopen img/greyscale.bmp\n\nDONE\n');
    });
  },

  invertColors: function(data, header) {
    process.stdout.write('inverting...');
    for (var i = 54; i < header.pixelArrayStart; i++) {
      data.writeUInt8(255 - data[i], i);
    }
    fs.writeFile(__dirname + '/../img/inverted.bmp', data, (error) => {
      if (error) throw error;
      process.stdout.write('\n\nTransformed to inverted colors. To view:' +
                            '\n\nopen img/inverted.bmp\n\nDONE\n');
    });
  }
};

exports.bitTransformer = bitTransformer;
