// скатано з https://learn.javascript.ru/task/fibonacci-numbers


// let n =  parseInt(prompt('Please, enter your number'),10);

// let start = parseInt(prompt(START from 0 or 1'),10);
// if

const n = parseInt(prompt('Please, enter your number'), 10);



// let n =  parseInt(prompt('Please, enter your number'),10);
function fibi(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);

}

document.write('First method ' + fibi(n));
document.write('<br>');

alert('First method ' + fibi(n));

// let n =  parseInt(prompt('Please, enter your number'),10);
function fib(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

document.write('Second method ' + fib(n));
document.write('<br>');
alert('Second method ' + fib(n));

document.write('Third method is under construction but answer is ' + fib(n));

