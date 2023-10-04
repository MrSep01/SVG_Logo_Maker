const { Circle, Triangle, Square } = require('./shapes');

test('Test Circle render method', () => {
  const circle = new Circle(50, 50, 40, 'blue');
  expect(circle.render('A', 'white')).toBe('<circle cx="50" cy="50" r="40" fill="blue" /><text x="50" y="60" font-size="40" text-anchor="middle" fill="white">A</text>');
});

test('Test Triangle render method', () => {
  const triangle = new Triangle(150, 50, 160, 'red');
  const height = (Math.sqrt(3) / 2) * 160;
  const offsetY = height / 2;
  expect(triangle.render('B', 'white')).toBe(`<polygon points="150,${50 - height / 2 + offsetY} ${150 + 160 / 2},${50 + height / 2 + offsetY} ${150 - 160 / 2},${50 + height / 2 + offsetY}" fill="red" /><text x="150" y="${50 + offsetY + 20}" font-size="40" text-anchor="middle" fill="white">B</text>`);
});

test('Test Square render method', () => {
  const square = new Square(150, 100, 130, 'green');
  expect(square.render('C', 'white')).toBe('<rect x="85" y="35" width="130" height="130" fill="green" /><text x="150" y="110" font-size="40" text-anchor="middle" fill="white">C</text>');
});
