// Set  Variables
var lwrCaseVal = range("a", "z");
var upCaseVal = range("A", "Z");
var incNumVal = range("0", "9");
var SpecialVal = range(" ", "/").concat(
	range(":", "@"),
	range("[", "`"),
	range("{", "~")
);
var results = [];
//Run Password Generator
function RunPWGen() {
	results = [];
	var PwLengthVal = prompt("How long would you like it (Min 8 / Max 128) ?", 8);

	// Enforce the range Max & Min
	if (PwLengthVal != null && PwLengthVal >= 8 && PwLengthVal <= 128) {
		// Ask the user for what to include
		var useLwrCase = confirm("Include Lowercase Cancel = No  Ok = Yes ? ");
		var useUpperCase = confirm("Include Uppercase Cancel = No  Ok = Yes ? ");
		var useNums = confirm("Include Numeric Cancel = No  Ok = Yes ? ");
		var useSpecial = confirm(
			"Include Special Characters Cancel = No  Ok = Yes ? "
		);
		// Add Selected Arrays to Results
		if (PwLengthVal > 95) {
			results.push(...results);
		}
		if (useLwrCase == true) {
			results.push(...lwrCaseVal);
		}

		if (useUpperCase == true) {
			results.push(...upCaseVal);
		}

		if (useNums == true) {
			results.push(...incNumVal);
		}

		if (useSpecial == true) {
			results.push(...SpecialVal);
		}
		// Validate user selected at least One Character Option
		if (results.length != 0) {
			generatePw(results, PwLengthVal);
		}
		// If user selected a range outside the min/max or No Character Option
		else {
			outOfRangeOrCancel();
		}
	} else {
		outOfRangeOrCancel();
	}
}

function generatePw(results, PwLengthVal) {
	function shuffle(array) {
		array.sort(() => Math.random() - 0.5);
	}

	shuffle(results);
	document.getElementById("demo").innerHTML =
		"Your Secure Password :    " + results.slice(0, PwLengthVal).join("");
}

function outOfRangeOrCancel() {
	document.getElementById("demo").innerHTML =
		"Ops!! Either your selected password length is outside the range: 8(min)-128(max); or you Canceled all subsequent character options";
}

function range(start, stop) {
	var result = [];
	for (
		var idx = start.charCodeAt(0), end = stop.charCodeAt(0);
		idx <= end;
		++idx
	) {
		result.push(String.fromCharCode(idx));
	}
	return result;
}
