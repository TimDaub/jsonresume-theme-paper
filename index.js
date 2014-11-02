var fs = require("fs");
var Handlebars = require("handlebars");

function render(resume) {

	var css = fs.readFileSync(__dirname + "/css/style.css", "utf-8");
  var opensans = fs.readFileSync(__dirname + "/bower_components/open-sans-fontface/open-sans.css", "utf-8");
  var merriweather = fs.readFileSync(__dirname + "/bower_components/merriweather-fontface/merriweather.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");

  // http://stackoverflow.com/a/12002281/1263876
  Handlebars.registerHelper("foreach",function(arr,options) {
      if(options.inverse && !arr.length)
          return options.inverse(this);

      return arr.map(function(item,index) {
          item.$index = index;
          item.$first = index === 0;
          item.$last  = index === arr.length-1;
          return options.fn(item);
      }).join('');
  });

  
	return Handlebars.compile(template)({
		css: css,
    opensans: opensans,
    merriweather: merriweather,
		resume: resume
	});
}

module.exports = {
	render: render
};
