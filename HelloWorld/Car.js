// Module
var Shapes;
(function (Shapes) {
    //Class
    class Point {
        // Constructor
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        // Instance member
        getDist() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
    // Static member
    Point.origin = new Point(0, 0);
    Shapes.Point = Point;
})(Shapes || (Shapes = {}));
// Local variables
var p = new Shapes.Point(4, 5);
var dist = p.getDist();
//# sourceMappingURL=Car.js.map