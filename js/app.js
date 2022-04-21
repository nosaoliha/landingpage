/**
 * Define Global Variables
 * 
*/
//this function identifies the global varables.
	let navbar = document.getElementById("navbar__list");
	let docFragment = document.createDocumentFragment();
	let sections = [...document.getElementsByTagName("section")];
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/	
	
//this function checks if the element is in viewport.
	function isInViewport (elem) {
		let distance = elem.getBoundingClientRect();
			return (
			  distance.top >= -300 &&
			  distance.left >= 0 &&
			  distance.bottom <= (1.3 * window.innerHeight || document.documentElement.clientHeight) &&
			  distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};	
	
//this function converts the HTMLCollection Object to an Array using the spread operator.
	let navbarListNames = getNavbarListItems(sections);
	function getNavbarListItems(sections) {
		return sections.map(section => {
		return section.getAttribute("data-nav");
	});
}

//this function removes and adds the "active" class on the current active section.
	function addActiveClass(newElement, className) { 
	let previousActiveElement = document.querySelector(`.${className}`);
		previousActiveElement.classList.remove(`${className}`);
		newElement.classList.add(className);
}

//this function scrolls to section on the navbar.	
	function scrollAndMakeActive(event) {
	let newSectionId = event.target.getAttribute("data-section-id");
	let newSection = document.getElementById(newSectionId);
		  newSection.scrollIntoView({behavior: "smooth"});

//this function generates a scroll event and the "active" class is set inside the eventListener.
	let newListItemId = `link${newSectionId.substring(7,8)}`;
	let newListItem = document.getElementById(newListItemId);

//this function adds the "active" class to the link item.
	addActiveClass(newListItem, "active-link");
}
	function scrollEventListener(event) {
		sections.forEach(section => {
			if (!isInViewport(section)) {
				return;
			}
				else {

//this function adds the "active" class for the sections.
	addActiveClass(section, "active-section");       
	let newListItemId = `link${section.id.substring(7,8)}`;
	let newListItem = document.getElementById(newListItemId);

//this function adds the "active" class for list items.
	addActiveClass(newListItem, "active-link");
        }
    })
}

//this function builds the menu.
	function buildNavBar(navbarListNames) {
		navbarListNames.forEach( (name, index) => {
			let listItem = document.createElement("li");
				  listItem.innerText = name;
				  listItem.className = (index === 0) ? "menu__link active-link" : "menu__link";
				  listItem.setAttribute('data-section-id', name.replace(/\s/g, "").toLowerCase());
				  listItem.id = `link${index+1}`;
				  listItem.addEventListener("click", scrollAndMakeActive);
        docFragment.appendChild(listItem);
    });
		navbar.appendChild(docFragment);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

//this function is to build the nav.
	buildNavBar(navbarListNames);

//this function adds the "active" class to the sections at the top of viewport.
	window.addEventListener("scroll", scrollEventListener);
