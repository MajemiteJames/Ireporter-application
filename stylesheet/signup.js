
function allLetter() {
	var name = document.querySelector("#name").value;

	var letters = /^[A-Za-z]*$/;
		if (name.test(letters)) {
			return true;
			} else {
			alert("Not a valid Name");
			return false;
			}
		}