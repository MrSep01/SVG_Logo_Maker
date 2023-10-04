# SVG Logo Maker 🎨

## Introduction 📚

The SVG Logo Maker is a simple yet effective solution for creating customizable SVG logos with text. This guide will cover the application's functionality, design considerations, and code structure.

## Project Overview 🌐

The main goal of this project is to provide a user-friendly interface where users can generate SVG logos featuring text and shapes, with customizable colors.

### Objectives 🎯

- Easy-to-use CLI interface.
- Multiple shape options: Circle, Triangle, Square.
- Customizable text and shape colors.
- Output SVG file for use in various applications.

## Shape Classes Defined 🧩

The project includes classes for the following shapes:

- **Circle:** Defines the circle shape and its rendering in SVG format.
- **Triangle:** Defines the triangle shape and its rendering in SVG format.
- **Square:** Defines the square shape and its rendering in SVG format.

## Development Process 💻

### Step 1: Requirement Analysis

Gather user requirements for the logo, such as:

- Text and text color.
- Shape type.
- Shape color.

### Step 2: Designing the Classes

Design classes for each shape, each having a `render()` method to produce SVG string.

### Step 3: Coding the Solution

Key functions and classes developed:

- **`generateSVG`:** Main function to create the SVG string.
- **Shape classes (`Circle`, `Triangle`, `Square`):** Handle rendering of shapes in SVG format.

### Step 4: Testing & Debugging

Unit tests are provided for verifying the functionality of each shape class and its rendering method.

## Code Breakdown 🧠

### Main Function: `main`

- **User Input:** Uses `inquirer` to collect user input for text, text color, shape, and shape color.
- **SVG Generation:** Calls `generateSVG` to create the SVG string and writes it to a file.

### Shape Classes

Each class has a `render` method, responsible for returning the SVG string for that shape with text.

## How to Use the Project 🖥️

Run the application from the command line and follow the prompts to generate your SVG logo. The output will be saved as `logo.svg`.

## Repository
[GitHub Repository Link](https://github.com/MrSep01/SVG_Logo_Maker)

## Demo 
Watch the app demo:
[Demo Video]()

## Conclusion 🏁

The SVG Logo Maker is a simple yet powerful tool for generating SVG logos. The code is modular and easily extendable for additional shapes and features.

## License & Contribution 📜

This project is open for contributions and is licensed under the MIT License.

## Contact 📞

For any inquiries, feel free to contact at sep.alamoutil@sepalamouti.com
