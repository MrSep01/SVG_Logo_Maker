const inquirer = require('inquirer');
const fs = require('fs').promises;
const { Circle, Triangle, Square } = require('./lib/shapes');


const generateSVG = (text, textColor, shape, shapeColor) => {
  let shapeInstance;
  
  switch (shape) {
    case 'Circle':
      shapeInstance = new Circle(150, 100, 80, shapeColor);
      break;
    case 'Triangle':
      shapeInstance = new Triangle(150, 50, 160, shapeColor);
      break;
    case 'Square':
      shapeInstance = new Square(150, 100, 130, shapeColor);
      break;
    default:
      break;
  }

  return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render(text, textColor)}
    </svg>
  `;
};


const main = async () => {
  try {
    const { text, textColor, shape, shapeColor } = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'What text do you want on your logo? (Up to 3 characters)',
        validate: value => (value.length <= 3 ? true : 'Please enter up to 3 characters.')
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want for the text? (e.g., white, #FFFFFF)'
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Which shape do you want for your logo?',
        choices: ['Circle', 'Triangle', 'Square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want for the shape? (e.g., green, #00FF00)'
      }
    ]);

    const svgString = generateSVG(text, textColor, shape, shapeColor);

    await fs.writeFile('logo.svg', svgString);
    console.log('Generated logo.svg');
  } catch (err) {
    console.error(err);
  }
};

main();
