/*
	Hello world! script
*/

(function confirmButton() {
	var button = document.getElementById('btn-confirm-data');

	button.addEventListener('click', function(e) {
    var testInput = document.getElementById('form-telephone-nr').value;
		var reg = /^\d+$/;
		if (reg.test(testInput)) {
		    console.log('ok');
    } else {
        console.log('again');
    }
});



	module.exports = confirmButton;
})();
