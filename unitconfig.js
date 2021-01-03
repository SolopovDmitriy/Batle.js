'use strict';//строгий режим в js переводит в такой режим, где запрещается использование всякого ненужного

// x = 5;
// delete x;
// function f(a, a) { }
// var let = 5;
// const f = () => {};
// function f() { }

let UNIT_CFG = {//в переменной let UNIT_CFG лежит обЪект , который название UNIT_CFG
    SPEC: {// SPEC - имя свойства обЪекта UNIT_CFG, свойством объекта является обЪект, SPEC - обЪект внутренний
        TANK:'tank',// свойство TANK: в свойстве SPEC:, 'tank' - тип персонажа, русские танки, много здоровья, т.е. много брони
        SUPPORT:'support',// средние показатели, но много боеприпасов, ездят между другими танками и дают боеприпасі и топливо
        DAMAGER:'damager'// тот кто приносит урон, немецкие танки
    },
    MAX_HEALTH:1500,// MAX_HEALTH - имя свойства обЪекта UNIT_CFG
    MAX_STAMINA:3000,// MAX_STAMINA: сколько может пройти пути
    MAX_MANA:5000// MAX_MANA: сверхспособности
}

/*
let object = {
    name: value,
}
 */

// const MAX_HEALTH = 1500;
// const SPEC = {
//     TANK: 'tank',
// };
//
// delete UNIT_CFG.MAX_HEALTH;
// UNIT_CFG.NEW_PROPERTY = 555;
// UNIT_CFG.eee = function() {
//
// }

// class A {
//     yy
//     #yy
// }

UNIT_CFG = Object.freeze(UNIT_CFG);// это безопастности, для заморозки обЪекта, запрещает добавление новых свойств к обЪекту и запрещает удалять или изменять существующие свойства

module.exports = UNIT_CFG;