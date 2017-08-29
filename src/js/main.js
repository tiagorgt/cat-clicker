
var clickCountElem = document.getElementById('clickCount');
var clickCount = 0;
clickCountElem.textContent = clickCount;

var elem = document.getElementById('catImg');
elem.addEventListener('click', function () {
    clickCount++;
    clickCountElem.textContent = clickCount;
});