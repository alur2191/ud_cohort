// build a template engine.

//  template string
const template = "My name is {{name}} and I am {{age}} years old.";

class TemplateEngine {
  constructor(template) {
		this.template = template;
	}

  printWith(data) {
		let insideCurlyBrackets = false;
		let processedTemplate = '';
		let keyName = '';

		for(let i = 0; i < template.length; i++) {
			if (template[i] === '{' && template[i+1] === '{') {
				insideCurlyBrackets = true;
				i+=1;
			} else if (template[i] === '}' && template[i+1] === '}') {
				processedTemplate += data[keyName];
				keyName = '';
				insideCurlyBrackets = false;
				i+=1;
			} else if (insideCurlyBrackets) {
				keyName += template[i];
			}  else {
				processedTemplate += template[i];
			}
		}
		return processedTemplate
	}
}

const engine = new TemplateEngine(template);

console.log(engine.printWith({ name: 'Jenny', age: 34 }))
console.log(engine.printWith({ name: 'Jeff', age: 88 }))
console.log(engine.printWith({ name: 'Jerry', age: 12 }))