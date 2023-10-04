class Circle {
    constructor(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
    }
  
    render(text, textColor) {
      return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}" />
              <text x="${this.x}" y="${this.y + 10}" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
  }
  
  class Triangle {
    constructor(x, y, sideLength, color) {
      this.x = x;
      this.y = y;
      this.sideLength = sideLength;
      this.color = color;
    }
  
    render(text, textColor) {
      const height = (Math.sqrt(3) / 2) * this.sideLength;
      const offsetY = height / 2; // To adjust the position so the triangle fits within the canvas
      const point1 = `${this.x},${this.y - height / 2 + offsetY}`;
      const point2 = `${this.x + this.sideLength / 2},${this.y + height / 2 + offsetY}`;
      const point3 = `${this.x - this.sideLength / 2},${this.y + height / 2 + offsetY}`;
      return `<polygon points="${point1} ${point2} ${point3}" fill="${this.color}" />
              <text x="${this.x}" y="${this.y + offsetY + 20}" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
  }
  
  
  class Square {
    constructor(x, y, sideLength, color) {
      this.x = x;
      this.y = y;
      this.sideLength = sideLength;
      this.color = color;
    }
  
    render(text, textColor) {
      const x = this.x - this.sideLength / 2;
      const y = this.y - this.sideLength / 2;
      return `<rect x="${x}" y="${y}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
              <text x="${this.x}" y="${this.y + 10}" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  