#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
      if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
          // Create an empty object if width or height is invalid
          this.width = 0;
          this.height = 0;
      } else {
          this.width = w;
          this.height = h;
      }
  }

  print() {
      if (this.width === 0 || this.height === 0) {
          console.log("Empty Rectangle");
      } else {
          for (let i = 0; i < this.height; i++) {
              console.log('X'.repeat(this.width));
          }
      }
  }

  rotate() {
      // Exchange the width and height
      const temp = this.width;
      this.width = this.height;
      this.height = temp;
  }

  double() {
      // Double the width and height
      this.width *= 2;
      this.height *= 2;
  }
}

class Square extends Rectangle {
  constructor(size) {
      // Call the constructor of Rectangle with the same size for width and height
      super(size, size);
  }
}

// Example usage:
const mySquare = new Square(5); // Create a square with size 5
mySquare.print(); // Print the square
mySquare.rotate(); // Rotate the square
mySquare.print(); // Print the rotated square
mySquare.double(); // Double the dimensions
mySquare.print(); // Print the doubled square
