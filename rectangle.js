
class Rectangle {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.offsetX = 0;
      this.offsetY = 0;
      this.dragging = false;
      this.rollover = false;
    }
  
    show(px, py) {
      if (this.dragging) {
        this.x = px + this.offsetX;
        this.y = py + this.offsetY;
      }
  
      stroke(255);
      noFill();
      rect(this.x, this.y, this.w, this.h);
    }
  
    pressed(px, py) {
      if (px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.h) {
        print("clicked on rect");
        this.dragging = true;
        this.offsetX = this.x - px;
        // print(this.offsetX);
        this.offsetY = this.y - py;
        // print(this.offsetY);
      }
    }
  
    notPressed(px, py) {
          print("mouse was released");
        this.dragging = false;
    }
  }