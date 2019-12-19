class Polygon {
    constructor(sides) {
      this.sides = sides
      this.count = this.sides.length
    }
  
    get countSides() {
      return this.count
    }
  
    get perimeter() {
      if (!Array.isArray(this.sides)) return false;
      let sum = 0;
      for (let int of this.sides) {
        sum += int
      }
      return sum
    }
  }
  
  class Triangle extends Polygon {
  
    get isValid() {
      if (!Array.isArray(this.sides)) return false;
      if (this.count !== 3) return false;
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
  }
  
  class Square extends Polygon {
  
    get isValid() {
      if (!Array.isArray(this.sides)) return false;
      if (this.count !== 4) return false;
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      let side4 = this.sides[3]
      if ((side1 === side2) && (side1 === side3) && (side1 === side4)){
          return true;
      } else return false;
    }
  
    get area() {
      if (!Array.isArray(this.sides)) return false;
      if (this.count !== 4) return false;
      return this.sides[0] ** 2;
    }
  }