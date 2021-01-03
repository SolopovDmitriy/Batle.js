const colors = require('colors');// подключаем внешнюю библиотеку,а именно 'colors'для манипуляции цветами, можем в консоль выводить сообщения разными цветами
const util = require('util');// подключаем внешнюю библиотеку,для вызова функций связанных с отладкой, require-требовать
const UNIT_CFG = require('./unitconfig');//подключение своего файла по текущему пути с index
const Unit = require('./Unit');//подключение своего файла по текущему пути, на уровне с index
const Logger = require('./Logger');//подключение своего файла по текущему пути, на уровне с index

let printUnit = unit => console.log(unit.toString())
let blankLine = () => console.log()// вызываем отступы

let printUnits = (...units) => {// ...units - принимает произвольное количество унитов
    units.forEach(unit => printUnit(unit))
    // for (let unit of units) {
    //     printUnit(unit)
    // }
    blankLine()//отступы
}

let tiger = new Unit('tank', 'tiger', 110, 10, 50)// создаем новый обЪект класса  Unit и записываем его в новую переменную, class Unit extends UnitSpec {tank - хорошая броня и здоровья высокая защита от повреждения
// constructor(spec, name, health, mana, stamina)
let pantera = new Unit('damager', 'pantera', 90, 25, 40)// damage - кто хорошо стреляет и наносит урон

// console.log(tiger.toString())
// console.log(pantera.toString())

// printUnit(tiger)
// printUnit(pantera)

printUnits(tiger, pantera)// передаем tiger, pantera в функцию printUnits

tiger.attack(pantera, 15)
printUnits(tiger, pantera)

pantera.attack(tiger, 20)
printUnits(tiger, pantera)

tiger.attack(tiger)
pantera.attack(null, 10)

// Logger.logError({
//     code: 1008,
//     stack: 'error while doing something....',
//     name: 'my-new-file-name-error'
// });
// Logger.getLastErrors('uniterror', 5);
let dateStart = new Date(2019, 5)
let dateEnd = new Date()// текущая дата в момент запуска программы
// console.log(dateStart)
// console.log(dateEnd)
// Logger.getErrorsForTime('uniterror', dateStart, dateEnd)

// let unit = new Unit(UNIT_CFG.SPEC.DAMAGER, 1000, 2000, 3000);
// console.log(unit.toString());

// Logger.getLastErrors('UnitError', 3, function (data) {
//     console.log(data.length);
//     console.dir(data[0].code);
//     console.dir(data[0].date);
//     console.dir(data[0].stack);
// });

// Logger.getErrorsForTime(
//     'UnitError',
//     new Date(2020, 11, 1),
//     new Date(2020, 11, 31),
//     function (data) {
//         console.dir(data);
//     }
// )
// console.log('hello'.green)
//
// var txt = 'Congratulate %s on his %dth birthday!';
// var name = 'Linus';
// var age = 6;
// var txt2 = 'Congratulate ' + name + ' on his ' + age + 'th birthday!';
// var txt3 = `Congratulate ${name} on his ${age}th birthday!`;
// string txt3 = $"Congratulate {name} on his {age}th birthday!";
// string fileName = @"D:\myFolder\myFolder2\1.txt";
/*
string fileName = "1.txt";
string path = $@"D:\myFolder\{fileName}";
 */
// var result = util.format(txt, 'Linus', 6); // Congratulate Linus on his 6th birthday
//
// console.log(result);

// Console.WriteLine("My age is " + 20);
// Console.WriteLine(string.Format("My age is %d, %d, %d, %d", 20, 40, 1, 8));
/*
%d - number
%s - string
 */