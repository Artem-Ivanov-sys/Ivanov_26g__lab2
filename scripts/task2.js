{
    function find_numbers(s) {
        let is_num = false, is_dotted = false, count = 0;
        for (let i of s) {
            if (!isNaN(parseInt(i))||i=='.') {
                let cur = parseInt(i);
                if (is_num == false) {
                    is_num = true;
                    if (cur == 0) {
                        is_dotted = false;
                        is_num = false;
                        continue;
                    } else {
                        count ++;
                    }
                } else {
                    if (i=='.') {
                        if (is_dotted==false) {
                            is_dotted = true;
                        } else {
                            is_num = false;
                            is_dotted = false;
                            continue;
                        }
                    } else {}
                }
            } else {
                is_dotted = false;
                is_num = false;
            }
        }
        return count;
    }
    console.log("З клавіатури вводиться текстовий рядок. Написати функцію, яка розраховує кількість чисел у рядку (числом вважається послідовність символів, яка починається із цифри 1 - 9, у своєму записі містить знаки 0 - 9 і крапку та відокремлена пропусками).");
    let s = prompt("Введіть рядок:");
    console.log(`Введені дані: ${s}`);
    console.log(`Кількість чисел: ${find_numbers(s)}`);
}