{
    console.log("У автоматично згенерованому масиві із 12 цілих чисел знайти всі, які кратні 5 та вивести їх у рядок відсортованим за зростанням.");
    let count = 12;
    let s = [];
    for (let i = 0; i < count; i++) {
        s.push(Math.floor(Math.random()*1000));
    }
    console.log(`Bведені дані: ${s}`);
    let res = [];
    for (let i of s) {
        if (i % 5 == 0) {
            res.push(i);
        }
    }
    res = res.sort((a, b) => {return a>b?1:-1});
    console.log(`Результуючий масив: ${res}`);
}