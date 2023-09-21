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

// Example usage:
const myRectangle = new Rectangle(5, 4); // Create a rectangle with width 5 and height 4
myRectangle.print(); // Print the rectangle
myRectangle.rotate(); // Rotate the rectangle
myRectangle.print(); // Print the rotated rectangle
myRectangle.double(); // Double the dimensions
myRectangle.print(); // Print the doubled rectangle
