/**
 * The points class
 * @class
 * @param {Point[]} points - A list of point classes
 */
var Points = function(points) {
	this._type = "points";

	if(points !== false) {
		for(var property in points) {
			if(points.hasOwnProperty(property)) {
				this[property] = points[property];
			}
		}
	}
};

/**
 * Draws a border around the points on screen
 */
Points.prototype.draw = function() {
	this.list.forEach(function(element) {
		element.draw();
	});
};

/**
 * Returns the point a user clicked on
 * @param {number} x - The x value from the user
 * @param {number} y - The y value from the user
 * @param {number} [r] - The radius for a touch
 * @returns {Point|null} The point the user clicked on
 */
Points.prototype.hitAPoint = function(x, y, r) {
	for(var i = 0; i < this.list.length; i++) {
		if(this.list[i].isOn(x, y, r)) {
			return this.list[i];
		}
	}
	return null;
};

/**
 * Get a specific point
 * @param {number} number - The number of a point
 * @returns {Point|null} The requested point
 */
Points.prototype.get = function(number) {
	for(var i = 0; i < this.list.length; i++) {
		if(this.list[i].number == number) {
			return this.list[i];
		}
	}
	return null;
};