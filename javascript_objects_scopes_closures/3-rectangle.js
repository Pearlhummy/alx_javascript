#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
      if (w <= 0 || h <= 0) {
          // Create an empty object
          this.width = 0;
          this.height = 0;
      } else {
          this.width = w;
          this.height = h;
      }
  }

  print() {
      if (this.width === 0 || this.height === 0) {
          // If the rectangle is empty, do nothing
          return;
      }

      for (let i = 0; i < this.height; i++) {
          console.log('X'.repeat(this.width));
      }
  }
}

// Example usage:
// Create a rectangle with width 5 and height 4
const myRectangle = new Rectangle(5, 4);
// Print the rectangle
myRectangle.print();
