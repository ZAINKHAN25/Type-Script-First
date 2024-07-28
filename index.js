var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var btn = document.querySelector('#btn');
function add(num1, num2) {
    return num1 + num2;
}
btn.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
