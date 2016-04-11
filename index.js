'use strict';

// TODO get rid of unecessary console.log's throughout

const transformer = require(__dirname + '/lib/bitmap-data');

transformer.readBitmap(__dirname + '/img/palette-bitmap.bmp');
