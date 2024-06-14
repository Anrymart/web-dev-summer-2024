let addButton = document.getElementById('add');
addButton.addEventListener('click', function (event) {
    let a = +document.getElementById('firstNumber');
    let b = +document.getElementById('secondNumber');
    alert(a + b);
});