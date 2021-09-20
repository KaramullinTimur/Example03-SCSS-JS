toggleDropdownMenu();
toggleSideMenu();


// SHOW/HIDE ANY DROPDOWN MENU
function toggleDropdownMenu() {

    // Get all dropdowns on the page
    let dropdownAll = document.querySelectorAll('.dropdown');

    // Iterate all the dropdowns 
    for(let dropdown of dropdownAll) {

        // Get dropdown buttons
        for(let button of dropdown.children) {
            if(button.tagName === 'BUTTON' && button.classList.contains('dropdown-button')) {

                // Get dropdown menus
                for(let list of button.parentElement.children) {
                    if(list.tagName === 'UL' && list.classList.contains('dropdown-list')) {

                        // Show dropdown menu if dropdown button is clicked
                        button.addEventListener('click', (event) => {
                            list.classList.add('dropdown_shown');
                            event.stopPropagation();
                        })
                        
                        // Hide dropdown menu when clicked anywhere on the page
                        document.body.addEventListener('click', () => {
                            list.classList.remove('dropdown_shown');
                        })

                        // Don't hide the dropdown menu when you click on it
                        list.addEventListener('click', (event) => {
                            event.stopPropagation();
                        })
                    }
                }
            }
        }
    }
}

// SHOW/HIDE SIDE MENU
function toggleSideMenu() {
    let hamburger = document.querySelector('.header-hamburger');
    let sideMenu = document.querySelector('.menu');

    // Show side menu if hamburger button is clicked
    hamburger.addEventListener('click', (event) => {
        sideMenu.classList.add('menu_shown');
        event.stopPropagation();
    })

    // Hide side menu when clicked anywhere on the page
    document.body.addEventListener('click', () => {
        sideMenu.classList.remove('menu_shown');
    })
    
    // Don't hide the side menu when you click on it
    sideMenu.addEventListener('click', (event) => {
        event.stopPropagation();
    })
}




