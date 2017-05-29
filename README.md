# Upgrowth ReactJS Flckr

Written by Philip A Senger

[philip.a.senger@cngrgroup.com](mailto:philip.a.senger@cngrgroup.com) | mobile: 0404466846 | [CV/Resume](http://www.visualcv.com/philipsenger) | [blog](http://www.apachecommonstipsandtricks.blogspot.com/) | [LinkedIn](http://au.linkedin.com/in/philipsenger) | [twitter](http://twitter.com/PSengerDownUndr)


## Objectives

A very simple ReactJS app written to view tagged flicker pictures.

💥 BOOM 💥

## Usage

This mvp was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). To facility the example, the base commands have been distilled to the following NPM scripts:

### to build the final product

Once completed, the code is in the ``/public`` directory

```sh
export PUBLIC_URL=/
export NODE_ENV=production
npm install
npm run build:css
npm run build
```

### Rapid development

You can run a local server, in watch mode. This allows the user to develop quickly.

```sh
export NODE_ENV=development
npm install
npm start
open http://127.0.0.1:8080
```

### How to build the css

All the scss is written in SASS and the Bootstrap libray is here if you want to turn things on or off.

```sh
npm run build:css
```

### How to run the tests

_If I had time to write any, it would have been ..._


```bash
npm install
npm test
```

## High lights

1. uses my favorite rapid prototype frame work [Create React App](https://github.com/facebookincubator/create-react-app)
2. Use of Sagas
3. Use of Accessibility with Twitter Bootstrap React components.

## Directory Structure

```
.
├── build
├── public
└── src
    ├── actionCreators
    │   ├── actionTypes
    ├── components
    ├── containers
    ├── reducers
    ├── sagas
    │   ├── watchers
    │   └── workers
    ├── scss
    ├── services
    └── store

```
