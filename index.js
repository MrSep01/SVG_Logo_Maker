// Import necessary modules
const inquirer = require('inquirer');
const fs = require('fs').promises;
const { Circle, Triangle, Square } = require('./lib/shapes');

// Function to generate SVG based on user input
const generateSVG = (text, textColor, shape, shapeColor) => {
  let shapeInstance; // Variable to hold the shape instance

  // Switch statement for initializing the correct shape class
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

  // Return the SVG string
  return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render(text, textColor)}
    </svg>
  `;
};

// Main asynchronous function to execute the script
const main = async () => {
  try {
    // Use inquirer to gather user inputs
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

    // Generate SVG based on the collected user input
    const svgString = generateSVG(text, textColor, shape, shapeColor);

    // Write the SVG to a file
    await fs.writeFile('logo.svg', svgString);

    // Inform the user that the file has been generated
    console.log('Generated logo.svg');
  } catch (err) {
    // Handle errors and display them
    console.error(err);
  }
};

// Invoke the main function
main();
