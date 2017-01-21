document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  u('.spinner').addClass('hidden');
  u('.title').removeClass('hidden');

  var fs = require('fs');

  var es6Codes = {
    'custom' : fs.readFileSync('./src/es6/custom.js', 'utf8'),
    'let' : fs.readFileSync('./src/es6/let.js', 'utf8'),
    'const' : fs.readFileSync('./src/es6/const.js', 'utf8'),
    'arrowFunction' : fs.readFileSync('./src/es6/arrowFunction.js', 'utf8')
  };

  (function showCode() {
    var container = u('body .container');
    _.forEach(es6Codes, function(value, key){
      var codeContainer = createCodeContainer(value, key);
      container.append(codeContainer);
      addChangeListener(container, key);
    });
  })();

  (function resizeDOM() {
    u('textarea.input').each(function(node){
      textAreaAdjust(node);
    });
  })();

  function textAreaAdjust(textarea) {
    textarea.style.height = "1px";
    textarea.style.height = (25+textarea.scrollHeight)+"px";
  };

  function addChangeListener(container, key){
    container.find('.' + key + ' .input').on('input propertychange', function(event){
      var textarea = u(event.target);
      var babelContainerClassName = textarea.closest('.row').attr('class').split(" ")[1];
      var babelContainer = u('.' + babelContainerClassName + ' pre');
      var transformedCode = babelify(event.target.value);
      if(typeof transformedCode === "string" && !transformedCode.error){
        babelContainer.html(transformedCode);
      }
      else {
        babelContainer.html(createErrorDisplay(transformedCode));
      }
      textAreaAdjust(textarea.nodes[0]);
    });
  };

  function createCodeContainer(es6Code, className){
    var template = u(document.createElement('div'));
    template.html(u('.js-template').html());

    template.find('.header').html(className);
    var es6Container = template.find(".es6");
    var es6codeContainer = u(document.createElement("div"));
    es6codeContainer.append(es6Code);
    es6Container.append(es6codeContainer.html());

    var es5Container = template.find(".es5");
    var es5codeContainer = document.createElement("pre");
    es5codeContainer.classList.add(className);
    var transformedCode = babelify(es6Code);
    if(typeof transformedCode === "string" && !transformedCode.error){
      es5codeContainer.innerHTML = transformedCode;
    }
    else {
      es5codeContainer.innerHTML = createErrorDisplay(transformedCode);
    }

    es5Container.append(es5codeContainer.outerHTML);

    template.find('.row').addClass(className);
    return template.html();
  };

  function createErrorDisplay(transformedCode){
    var errorElement = document.createElement("div");
    var errorHeader = document.createElement("h5");
    var errorText = document.createElement("span");
    errorText.classList.add('error-text');
    if(transformedCode && transformedCode.error){
      errorText.innerHTML = transformedCode.error;
    }
    errorElement.appendChild(errorText);
    errorElement.classList.add('error');
    return errorElement.outerHTML;
  };

  function babelify(es6Code){
    try {
      return _.trim(Babel.transform(es6Code, {
        presets: ['es2015']
      }).code.replace('"use strict";', ''));
    }
    catch(err){
      console.log(err)
      return {error:err};
    }
  };
});
