window.onload = function(){
    //fetch the hamburger
    const hamburgerButton = document.querySelector(".hamburger");
    //fetch the mobile menu
    const mobileMenu = document.querySelector(".mobileNavMenu");
    //make the hamburger button on and off and also toggle the menu items
    hamburgerButton.addEventListener('click', function(){
        hamburgerButton.classList.toggle('isActive');
        mobileMenu.classList.toggle('isActive');
    });

}