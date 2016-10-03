const _ = require('lodash');
const minimist = require('minimist');
const fs = require('fs');
const path = require('path');

const env = minimist(process.argv.slice(2));
const componentName = env._[0];
const componentTemplate = _.template(fs.readFileSync(path.join(__dirname, 'stateful.ejs')));
const packageTemplate = _.template(fs.readFileSync(path.join(__dirname, 'package.ejs')));
const cssTemplate = _.template(fs.readFileSync(path.join(__dirname, 'css.ejs')));
const destFolder = env.screen ? 'src/screens' : 'src/components';

fs.mkdirSync(path.join(destFolder, componentName));
fs.writeFileSync(
  path.join(destFolder, componentName, `${componentName}.js`),
  componentTemplate({ componentName: componentName }) // eslint-disable-line object-shorthand
);
fs.writeFileSync(
  path.join(destFolder, componentName, `${componentName}.css`),
  cssTemplate({ componentName: componentName }) // eslint-disable-line object-shorthand
);
fs.writeFileSync(
  path.join(destFolder, componentName, 'package.json'),
  packageTemplate({ componentName: componentName }) // eslint-disable-line object-shorthand
);
