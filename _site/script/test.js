function changePhoto() {
	var image = document.getElementById('giraffe_front');
	if(image.src.match("front")) {
		image.src = "../images/giraffe_side.jpg";
	}
	else {
		image.src = "../images/giraffe_front.jpg";
	}
}

function move_page(state) {
	console.log("move_page()");

	if(state == "false")
	{
		alert("아직 준비중인 페이지입니다.");
	}
}

var menuList = [{"title" : "HOME", "url" : "/index.html", "status" : "true"},
				{"title" : "ABOUT", "url" : "/about.html", "status" : "true"},
				{"title" : "PHOTO", "url" : "/photo.html", "status" : "false"},
				{"title" : "CONTACT", "url" : "/contact.html", "status" : "true"},
				{"title" : "QUICK MENU", "url" : "", "status" : "true"}
				];

function create_menu(){

	for (var i = 0; i < menuList.length - 1; i++) {
		console.log("create_menu\n");
		var className = document.getElementById("select");

		var ElementType = document.createElement('a');

		var title = document.createTextNode(menuList[i].title);

		ElementType.appendChild(title);
		ElementType.setAttribute('href', menuList[i].url);

ElementType.addEventListener('click', move_page(menuList[i].status));
/*
		ElementType.setAttribute('onclick', move_page(menuList[i].status));
		ElementType.onclick = function() { move_page(menuList[i].status); };
		*/

		className.appendChild(ElementType);
	};
}

function quick_menu() {
	console.log("quick_menu");
	var className = document.getElementById("quick_menu");

	var element = document.createElement('a');
	element.setAttribute('class', 'quick');
	var title = document.createTextNode(menuList[4].title);

	element.appendChild(title);

	var createList = document.createElement('ul');
	createList.setAttribute('id', 'menu_bar');

	for (var i = 0; i < menuList.length - 1; i++) {
		var list = document.createElement('a');
		var list_title = document.createTextNode(menuList[i].title);

		list.appendChild(list_title);
		list.setAttribute('href', menuList[i].url);

		createList.appendChild(list);
	};

	element.appendChild(createList);
	className.appendChild(element);
}