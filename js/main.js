var sidebar;

window.onload = function () {
	sidebar = sidebar = document.getElementById("sidebar");

	var smSidebarOpen = document.getElementById("sm-sidebar-open");
	addEvent(smSidebarOpen, "click", open);

	sidebarItems = sidebar.childNodes;
	for (var i = 0; i < sidebarItems.length; i++) {
		//x[i].addEventListener("click", boxClicker, false);
		addEvent(sidebarItems[i], "click", close);
	}
};

function open() {
	if (sidebar.style.display === 'block') {
		sidebar.style.display = 'none';
	} else {
		sidebar.style.display = 'block';
	}
}

// Close the sidebar with the close button
function close() {
	sidebar.style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
	document.getElementById("img01").src = element.src;
	document.getElementById("modal01").style.display = "block";
	var captionText = document.getElementById("caption");
	captionText.innerHTML = element.alt;
}

function addEvent(element, event_name, func) {
	if (element.addEventListener) {
		element.addEventListener(event_name, func, false);
	} else if (element.attachEvent) {
		element.attachEvent("on" + event_name, func);
	}
}