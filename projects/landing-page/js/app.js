/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const menuId = 'navbar__list';
const sections = document.querySelectorAll('main section');
let navItems = [] ;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
let buildNavItems = () => {
    let documentFragment = new DocumentFragment();

    for (let i = 0; i < sections.length; i++)
    {
        let li = document.createElement('li');

        li.innerHTML = sections[i].getAttribute('data-nav') ;
        li.dataset.section_id = sections[i].id;
        li.classList.add('menu__link');

        if( i === 0)
        {
            li.classList.add('active-li');
        }

        documentFragment.appendChild( li );
    }

    document.getElementById(`${menuId}`).appendChild( documentFragment );
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNavItems();
console.log( navItems );
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


