'use strict';
const colors = require('colors');
const path = './unitconfig';
const UNIT_CFG = require(path);
// import UNIT_CFG from './unitconfig';

// f();
//
// function f() {
//
// }

//базовый
class UnitSpec {
    constructor(spec /* 'tank' */) {
        let _spec = null;
        let _damageK = 1;       //урона
        let _defenceK = 1;      //броня
        let _agility = 1;       //уворот

        // '' == false == 0 == null == undefined
        // ' ' == true == 1

        // '' == false => true
        // '' === false => false

        let isValidSpec = function(spec2, param2) { // проверяет существует ли персонаж с таким типом, а под персонажем подразумевается UNIT_CFG  или tank например или support
            for (const key in UNIT_CFG.SPEC) {
                if(UNIT_CFG.SPEC[key] == spec2){
                    _spec = UNIT_CFG.SPEC[key];
                    return true;
                }
            }
            return false;
        }
        const myNewVariable = spec;
        if (!isValidSpec(myNewVariable, 228 /* 'tank' */)) {
            // throw new Error('spec is not valid');
        }
        switch (_spec) {
            case UNIT_CFG.SPEC.TANK: {
                _damageK = 1.5;
                _defenceK = 4;
                _agility = 0;
                break;
            }
            case UNIT_CFG.SPEC.DAMAGER: {
                _damageK = 3;
                _defenceK = 1.5;
                _agility = 1.3;
                break;
            }
            case UNIT_CFG.SPEC.SUPPORT: {
                _damageK = 0.5;
                _defenceK = 2;
                _agility = 1.5;
                break;
            }
        }

        // function getDamageBuff() {
        //     return _damageK;
        // }

        this.getDamageBuff = function () {
            return _damageK;
        }
        this.getDefenceBuff = function () {
            return _defenceK;
        }
        this.getAgilityBuff = function () {
            return _agility;
        }
    }
}

module.exports = UnitSpec;