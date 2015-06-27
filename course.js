// string for everything, days bool arr[5]
function Course(courseID, section, dept, num, iFirst, iLast, days, bldg, room) {
	this.courseID = courseID;
	this.section = section;
	this.dept = dept;
	this.num = num;
	this.iFirst = iFirst;
	this.iLast = iLast;
	this.days = days;
	this.bldg = bldg;
	this.room = room;
}

// pre: must be passed 2 Course objects
function equals(course1, course2) {
	return course1.courseID == course2.courseID && course1.dept == course2.dept && course1.num == course2.num;
}

// pre: must be passed a Course object
function toString(course) {
	return course.courseID + ": " + course.dept + " " + course.num + " " + course.section + " taught by " + course.iLast.toUpperCase() + ", " + course.iFirst.toUpperCase() + " in " + course.bldg + " " + course.room + " on " + daysToString(course.days);
}

// days is an array
// returns a string, i.e. "MWF" or "TTh"
function daysToString(days) {
	var strs = ["M", "T", "W", "Th", "F"];
	var res = "";
	for (var i = 0; i < days.length; i++) {
		if (days[i] == true) {
			res += strs[i];
		}
	}
	return res;
}
