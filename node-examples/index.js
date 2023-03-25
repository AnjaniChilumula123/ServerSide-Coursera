var rect = require("./rectangle");
function solveRect(l,b) {
    console.log("Solving for rectangle with l = "
                + l + " and b = " + b);
    rect(l,b, (err,rectangle) => {
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement after the call to rect()");
};
solveRect(5,10);
solveRect(-3,9);
solveRect(0,-7);
solveRect(4,5);
