function changePhoto() {
	var image = document.getElementById('giraffe_front');
	if(image.src.match("front")) {
		image.src = "../images/giraffe_side.jpg";
	}
	else {
		image.src = "../images/giraffe_front.jpg";
	}
}
