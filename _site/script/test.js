var menuList = [{"title" : "HOME", "url" : "/index.html", "status" : "true"},
				{"title" : "ABOUT", "url" : "/about.html", "status" : "true"},
				{"title" : "PHOTO", "url" : "/photo.html", "status" : "false"},
				{"title" : "CONTACT", "url" : "/contact.html", "status" : "true"},
				{"title" : "QUICK MENU", "url" : "", "status" : "true"}
				];

var sns_list = [{"sns" : "facebook", "url" : "http://www.facebook.com","img_url" : "images/facebook.jpg", "border" : "0", "width" : "30px", "height" : "30px"},
				{"sns" : "instagram", "url" : "http://www.instagram.com","img_url" : "images/instagram.jpg", "border" : "0", "width" : "30px", "height" : "30px"},
				{"sns" : "twitter", "url" : "http://www.twitter.com", "img_url" : "images/twitter.jpg", "border" : "0", "width" : "30px", "height" : "30px"}
				]

function changePhoto() {
	var image = document.getElementById('giraffe_front');
	if(image.src.match("front")) {
		image.src = "../images/giraffe_side.jpg";
	}
	else {
		image.src = "../images/giraffe_front.jpg";
	}
}

function create_menu(){
	for (var i = 0; i < menuList.length - 1; i++) {
		var className = document.getElementById("select");

		var ElementType = document.createElement('a');

		var title = document.createTextNode(menuList[i].title);


		if(menuList[i].status == "true") {
			ElementType.setAttribute('href', menuList[i].url);
		}
		else {
			ElementType.addEventListener('click', function(){ alert("아직 준비 중인 페이지입니다."); } );
		}

		ElementType.appendChild(title);
		className.appendChild(ElementType);
	};
}

function quick_menu() {
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

		if(menuList[i].status == "true") {
			list.setAttribute('href', menuList[i].url);
		}
		else {
			list.addEventListener('click', function(){ alert("아직 준비 중인 페이지입니다.");});
		}

		createList.appendChild(list);
	};

	element.appendChild(createList);
	className.appendChild(element);
}

function create_link() {
	for (var i = 0; i < sns_list.length; i++) {
		var getClass = document.getElementById("site");

		var createLink = document.createElement('a');
		createLink.setAttribute('href', sns_list[i].url);

		var imgFile = document.createElement('img');

		imgFile.setAttribute('class', 'web');
		imgFile.setAttribute('src', sns_list[i].img_url);
		imgFile.setAttribute('border', sns_list[i].border);
		imgFile.setAttribute('width', sns_list[i].width);
		imgFile.setAttribute('height', sns_list[i].height);

		createLink.appendChild(imgFile);
		getClass.appendChild(createLink);
	};
}