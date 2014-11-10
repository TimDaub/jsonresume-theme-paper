var fs = require("fs");
var Handlebars = require("handlebars");

function render(resume) {

	var css = fs.readFileSync(__dirname + "/css/style.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");

  // Uncomment this for printing as .pdf
  var print = fs.readFileSync(__dirname + "/css/print.css", "utf-8");

  // http://stackoverflow.com/a/12002281/1263876
  Handlebars.registerHelper("foreach",function(arr,options) {
      if(options.inverse && !arr.length)
          return options.inverse(this);

      return arr.map(function(item,index) {
          item.$index = index;
          item.$first = index === 0;
          item.$notfirst = index !== 0;
          item.$last  = index === arr.length-1;
          return options.fn(item);
      }).join('');
  });

  // http://stackoverflow.com/a/16315366
  Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
  });

  // http://stackoverflow.com/a/18831911
  Handlebars.registerHelper('commalist', function(items, options) {
    return options.fn(items.join(', '));
  });

  // return Handlebars.compile(template)({
  //   css: css,
  //   resume: resume
  // });

  //Uncomment this for printing as .pdf
	return Handlebars.compile(template)({
		css: css,
    print: print,
		resume: resume
	});
}

module.exports = {
	render: render
};
