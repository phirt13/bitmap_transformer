#Bitmap Transformer

This repo contains a bitmap color transformer.  

**In short**, the program takes a bitmap image buffer and runs a specified transform on the buffer and then writes the created data onto a new file.

The project uses node async file handling and modular patterns.

**You must have node installed to use this program**

##Getting Started

  1. First clone the repo from the command line:

	`git clone https://github.com/phirt13/bitmap_transformer.git`

  2. Next navigate to the root of the project and run:

	`npm install`

##Running a Transform

1. To run a transform:

	`node index transform`

2. `transform` can equal and *only equal* the following:

	- `blue`
	- `green`
	- `red`
	- `invert`

3. `node index` will not perform a transform you *must specify* your transform.  

4. Observe your transformed images:

	`open /img`

##About

Created by Alex Hirt during a Code fellows 401 Advanced JavaScript course.  
All code was written by me but concepts and bits and pieces were hashed out through discussion with my classmates.  
