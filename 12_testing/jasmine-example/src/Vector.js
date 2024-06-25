export class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };

  add(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  };
}