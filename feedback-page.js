const stars = document.querySelectorAll('.star')
const padre= document.querySelector(".stars")
stars.forEach(star => {
    star.addEventListener('click', (e) => {
    const value = e.target.getAttribute('data-value');
    console.log(`Value: ${value}`);
    const arraySelected =document.querySelectorAll(".selected")
        for (let i = 0; i < arraySelected.length; i++){
            arraySelected[i].classList.remove("selected")
            
        }
    for (let i = 0; i < value; i++) {
        stars[i].classList.add('selected');
    }
    });
});
function moreInfo(){
    window.open("https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjwwNWhsI38AhXXmtUKHWsdDREYABABGgJ3cw&ae=2&ohost=www.google.com&cid=CAESa-D2bpGxRgHFqv1_smxvl95Deqq2iMrPQe7ccOOgXHeg2hX89Cs8_KknB9A48sQYB8Ngpc4UJllD0DKRAXbMtGRpc3-mJduDvHvkwdeS9G-y4qXfyGBL3TYPcPjnz1H2SG3LENxkBvVEGik4&sig=AOD64_3pZcl_wsF_Jpcfe7O_eB1NuwQsIA&q&adurl&ved=2ahUKEwiC2s2hsI38AhW8Q_EDHQJGBMwQ0Qx6BAgKEAE&nis=2&dct=1");
    
}
const scrivi= document.getElementById("write")
scrivi.addEventListener('keyup', function(event) {
    if (event.code === 'Enter')
    {
        event.preventDefault();
        console.log(scrivi.value)
    }
});