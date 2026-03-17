export default function navigation() {
  const navigationItems = document.querySelectorAll('.navbar-item');
  for (let i = 0; i < navigationItems.length; i++) {
       if (window.location.href == navigationItems[i].href ){
            navigationItems[i].classList.add("is-active");
       }
  }
}