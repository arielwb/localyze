# Localyze coding challenge

## Description

This is my implementation for Localyze coding challenge.

### Requirements

- Node >=14.5.0

> If you have nvm installed you can just run `nvm use` in the project root folder

### Installation

To install the project dependencies, run:

```bash
  npm install
```

### Running the app

To view challenge solutions on the browser, run

```bash
  npm start
```

Then open the displayed url on your browser (probably http://localhost:1234)

### All scripts

There are a few things you can play around in this project

```bash
  npm run build                 # build the app
  npm run lint                  # check for coding style errors
  npm run start                 # start the project in the browser
  npm run test                  # runs the tests made using jest
  npm run test:watch            # runs the tests and watch for changes
```

### Project structure

```bash
.
├── src                         # Source files
│   ├── actions                 # Application logic (and the challenge implementations)
│   ├── components              # Dumb components
│   ├── sections                # Sections of the application
│   ├── App.js                  # Application wrapper
│   ├── index.html              # Application entry point
│   └── index.js                # React setup
├── README.md                   # This doc!
└── configs                     # Configuration files

```

### Considerations

- All the implementation for the challenges is located in the `src/actions` folder and the rendering on `src/sections`, except for the challenge 4.
- Challenge 4 required the use of React, and to follow the project structure, the logic is on `src/actions` and the presentation is on `src/sections`.
- I named the actions according to its nature, but I realize that even if I tried to use descriptive names, it can be difficult trying to match actions and challenges.

If this is the case, here is the correlation between them:

```bash
findLongestCharSequence         # Challenge 1
findMaxSubsetSum                # Challenge 2
findLastWordLength              # Challenge 3
filterUsersByCountry            # Challenge 4
findSymmetricDifference         # Challenge 5
```
