var BabelFish = require('babelfish');
var i18n = new BabelFish('en');

var yaml = require('js-yaml');
var fs   = require('fs');

var doc = yaml.safeLoad(fs.readFileSync('./ru.yml', 'utf8'));

  
i18n.addPhrase('ru', '', doc);

console.log(i18n.t('ru', 'demo.apples', {count: 3}));
