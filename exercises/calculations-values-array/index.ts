// Бизнес требование:
// allValues это логи измерений от прибора. Собрать статистику, отсеяв ошибочные измерения
// badValues - заранее известные ошибочные записии в логах
// loverBoundary и higherBoundary - границы данных для отсеивания погрешности измерений прибора

// После каждого этапа вывести данные в консоль.

// 1. Выбрать элементы из массива allValues, которые удовлетворяют условию:
// - не в массиве badValues
// - не меньше loverBoundary
// - не больше higherBoundary
// резултат новый массив goodValues [25, 23, 19, 9, 12, 44, 61]

// 2. Вывести каких значений больше, четных или нечетных.
// результат - **нечетных**. (25, 23, 19, 9, 61). Четных всего два (12, 44)

// 3. Найти среднее значение элементов из получившегося массива
// (25 + 23 + 19 + 9 + 12 + 44 + 61) / 7(количество элементов) = 27.571428571428573

// 4. Найти средний элемент в отсортированном массиве
// - если массив четный, то это элемент в центре [2, 9, 35, 8, 11] -> [2, 8, 9, 11, 35] -> 9
// - если массив нечетный, то это сумма двух в центре пополам [2, 9, 8, 11] -> [2, 8, 9, 11] -> (8 + 9) / 2 -> 8.5

// 5. Сделать два решения
// - используя по максимуму встроенные функции массивов
// - не используя встроенные функции массивов

function runIt() {
    const allValues = [1, 25, 18, 36, 4, 99, 23, 19, 18, 9, 12, 44, 61];
    const badValues = [18, 36];
    const loverBoundary = 5;
    const higherBoundary = 95;

    console.log("Running calculations...");
    //  1
    const goodValues = allValues.filter(
        (value) =>
            value > loverBoundary &&
            value < higherBoundary &&
            badValues.includes(value) === false
    );
    console.log("goodValues = ", goodValues);
    //  2
    const counts = goodValues.reduce(
        (acc, value) => {
            acc[value % 2]++;
            return acc;
        },
        [0, 0]
    );
    if (counts[0] > counts[1]) {
        console.log("Больше чётных значений");
    }
    if (counts[0] < counts[1]) {
        console.log("Больше нечётных значений");
    }
    if (counts[0] === counts[1]) {
        console.log(
            "Количество чётных значений равно количеству нечётных значений"
        );
    }
    //  3
    console.log(
        "Average value: ",
        goodValues.reduce((acc, value) => acc + value) / goodValues.length
    );
    //  4
    let sortedGoodValues = [];
    goodValues.forEach((value) => sortedGoodValues.push(value));
    sortedGoodValues.sort((a, b) => a - b);
    console.log("sortedGoodValues: ", sortedGoodValues);
    let average;
    if (sortedGoodValues.length % 2 === 0) {
        average =
            (sortedGoodValues[sortedGoodValues.length / 2 - 1] +
                sortedGoodValues[sortedGoodValues.length / 2]) /
            2;
    } else {
        average = sortedGoodValues[(sortedGoodValues.length - 1) / 2];
    }
    console.log("Средний элемент в отсортированом массиве равен ", average);
}

runIt();
