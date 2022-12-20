const stars = document.querySelectorAll('.star')

stars.forEach(star => {
    star.addEventListener('click', (e) => {
    const value = e.target.getAttribute('data-value');
    console.log(`Value: ${value}`);
    });
});








// const ratingStars =[...document.getElementsByClassName("star")]
// function executeRating(stars){
//     const starClassActive = stars.classList.toggle(".selected")
//     const starClassInactive="star"
//     const starsLength = stars.length
//     let i;

// stars.map((star) => {
//     star.onclick = () => {
//        i = stars.indexOf(star);

//        if (star.className===starClassInactive) {        
//           for (i; i >= 0; --i) stars[i].className = starClassActive;
//        } else {
//           for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
//        }
//     };
//  });
// }
