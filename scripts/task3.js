{
    function power(a, handler) {
        return handler(a);
    }
    console.log("Функція func приймає 2 параметра: число і анонімну функцію, яка підносить число до квадрату. Піднесіть число до 4-тої ступені за допомогою func.");
    let n;
    n = parseInt(prompt("Введіть число:"));
    if (isNaN(n)) {
        alert("Введені некоректні дані");
    } else {
        console.log(`Введені дані: ${n}`);
        console.log(`${n} в 4 степені буде ${power(power(n, k => {return k**2;}), k => {return k**2;})}`)
    }
}