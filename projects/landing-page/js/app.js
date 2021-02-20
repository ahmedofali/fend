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
const menuElement = document.getElementById(`${menuId}`);
const sections = document.querySelectorAll('main section');
let navMenuItems = null ;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
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
            li.classList.add('menu__active');
        }

        documentFragment.appendChild( li );
    }

    menuElement.appendChild( documentFragment );

    navMenuItems = document.querySelectorAll(`#${menuId} li`);
}

// Add class 'active' to section when near top of viewport
/**
 * @description Handle window scroll event
 *
 * @param event
 */
let handleWindowScrollEvent = ( event ) => {
    let windowYPosition = window.pageYOffset ;

    for (let i = 0; i < sections.length; i++)
    {
        if( windowYPosition >= sections[i].offsetTop - menuElement.offsetHeight ) {
            sections[i].classList.add('active-section');
        } else {
            sections[i].classList.remove('active-section');
        }
    }
}

// Scroll to anchor ID using scrollTO event
/**
 * @description handle menu item click
 *
 * @param event
 */
let handleMenuItemClick = ( event ) => {
    let target = event.target;
    let sectionId = target.getAttribute('data-section_id');

    for ( let i = 0 ; i < navMenuItems.length; i++ )
    {
        navMenuItems[i].classList.remove('menu__active');
    }

    target.classList.add('menu__active');

    document.getElementById( sectionId ).scrollIntoView();
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNavItems();

// Scroll to section on link click
for ( let i = 0 ; i < navMenuItems.length; i++ )
{
    navMenuItems[i].addEventListener('click', ( event ) => { handleMenuItemClick( event ); })
}

// Set sections as active
document.addEventListener('scroll', ( event ) => { handleWindowScrollEvent( event ) } );

