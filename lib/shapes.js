// Circle class definition
class Circle {
  // Constructor to initialize Circle object
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  // Method to render Circle as SVG
  render(text, textColor) {
    return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}" /><text x="${this.x}" y="${this.y + 10}" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
}

// Triangle class definition
class Triangle {
  // Constructor to initialize Triangle object
  constructor(x, y, sideLength, color) {
    this.x = x;
    this.y = y;
    this.sideLength = sideLength;
    this.color = color;
  }

  // Method to render Triangle as SVG
  render(text, textColor) {
    const height = (Math.sqrt(3) / 2) * this.sideLength; // Calculate height of the triangle
    const offsetY = height / 2;
    const point1 = `${this.x},${this.y - height / 2 + offsetY}`;
    const point2 = `${this.x + this.sideLength / 2},${this.y + height / 2 + offsetY}`;
    const point3 = `${this.x - this.sideLength / 2},${this.y + height / 2 + offsetY}`;
    return `<polygon points="${point1} ${point2} ${point3}" fill="${this.color}" /><text x="${this.x}" y="${this.y + offsetY + 20}" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
}

// Square class definition
class Square {
  // Constructor to initialize Square object
  constructor(x, y, sideLength, color) {
    this.x = x;
    this.y = y;
    this.sideLength = sideLength;
    this.color = color;
  }

  // Method to render Square as SVG
  render(text, textColor) {
    const x = this.x - this.sideLength / 2;
    const y = this.y - this.sideLength / 2;
    return `<rect x="${x}" y="${y}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" /><text x="${this.x}" y="${this.y + 10}" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
}

// Export classes for external use
module.exports = { Circle, Triangle, Square };

  