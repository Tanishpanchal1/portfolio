document.getElementById('sidebar-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').style.display = 'block';
});
// You can add a close button inside the sidebar or use a click event listener on the sidebar itself.
document.getElementById('sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.display = 'none';
});



const header = document.getElementById('header');
const button = document.getElementById('sidebar-toggle');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const headerHeight = header.offsetHeight;

    if (scrollPosition >= headerHeight) {
        button.style.opacity = '1';
    } else {
        button.style.opacity = '0';
    }
});






document.getElementById('scrollButton').addEventListener('click', () => {
    document.getElementById('elementToScroll').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  });