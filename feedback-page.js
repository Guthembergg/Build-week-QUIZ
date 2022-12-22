const stars = document.querySelectorAll('.star')

stars.forEach(star => {
    star.addEventListener('click', (e) => {
    const value = e.target.getAttribute('data-value');
    console.log(`Value: ${value}`);
    
    for (let i = 0; i < value; i++) {
        stars[i].classList.add('selected');
    }
    });
});

