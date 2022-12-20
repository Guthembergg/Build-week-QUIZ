const starsDiv = document.getElementsByClassName("stars");
let currentValue = 0;

const stars = document.querySelectorAll('.star')
stars.forEach(star => {
    star.addEventListener('mouseover', () => {

    });
    star.addEventListener('click', (event) => {
        currentValue = event.target.getAttribute('data-value');
    });
});
    
    

    