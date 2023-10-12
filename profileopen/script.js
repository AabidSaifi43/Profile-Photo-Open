const imgElements = document.querySelectorAll('.img img');
const popupImg = document.getElementById('popupImg');
const popup = document.getElementById('popup');

imgElements.forEach((img, index) => {
    img.addEventListener('click', () => {
        popupImg.src = img.src;
        popup.style.display = 'block';
    });
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});