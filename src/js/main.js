
var clickCountElem = document.getElementById('clickCount');
var clickCount = 0;
clickCountElem.textContent = clickCount;

var catName = 'Lui';
var catName2 = 'Donatello';

var catNameElem = document.getElementById('catName');
var catName2Elem = document.getElementById('catName2');

catNameElem.textContent = catName;
catName2Elem.textContent = catName2;

var imgElem = document.getElementById('catImg');
imgElem.addEventListener('click', function () {
    clickCount++;
    clickCountElem.textContent = clickCount;
});


var img2Elem = document.getElementById('catImg2');
img2Elem.addEventListener('click', function () {
    clickCount++;
    clickCountElem.textContent = clickCount;
});