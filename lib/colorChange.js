'use strict';

const fs = require('fs');
require(__dirname + '/bitmap-data');

var bitTransformer = {
  changeColorBlue: function(data, header) {
    console.log('first color = ' + data[54]);
    for (var i = 54; i < header.pixelArrayStart; i += 4) {
      data.writeUInt8(255, i);
    }
    console.log('first color = ' + data[54]);
    fs.writeFile(__dirname + '/../img/blue.bmp', data, (error) => {
      if (error) throw error;
      console.log('Transformed Blue');
    });
  },

  changeColorGreen: function(data, header) {
    console.log('second color = ' + data[55]);
    for (var i = 54; i < header.pixelArrayStart; i += 4) {
      data.writeUInt8(255, i + 1);
    }
    console.log('second color = ' + data[55]);
    fs.writeFile(__dirname + '/../img/green.bmp', data, (error) => {
      if (error) throw error;
      console.log('Transformed Green');
    });
  },

  changeColorRed: function(data, header) {
    console.log('third color = ' + data[56]);
    for (var i = 54; i < header.pixelArrayStart; i += 4) {
      data.writeUInt8(255, i + 2);
    }
    console.log('third color = ' + data[56]);
    fs.writeFile(__dirname + '/../img/red.bmp', data, (error) => {
      if (error) throw error;
      console.log('Transformed Red');
    });
  },

  invertColors: function(data, header) {
    for (var i = 54; i < header.pixelArrayStart; i++) {
      data.writeUInt8(255 - data[i], i);
    }
    fs.writeFile(__dirname + '/../img/inverted.bmp', data, (error) => {
      if (error) throw error;
      console.log('Transformed Inversion');
    });
  }
};

exports.bitTransformer = bitTransformer;
