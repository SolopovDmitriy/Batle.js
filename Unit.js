'use strict';
const colors = require('colors');
const UNIT_CFG = require('./unitconfig');
const UnitSpec = require('./unitspec');
const UnitError = require('./UnitError');

/*
int damageK = 1;
const int MAX_DAMAGE = 1000;
const int MaxDamage = 1000;

public class Enemy
{
   public int MaxDamage { get; set; }

   // const => readonly + static

   public const int Var = 50;

   public readonly static int Var = 50;

   private int health;

   public int Health
   {
      get
      {
         if (health > 50)
         {
            return health;
         }
         else
         {
            return 10;
         }
      }
      set
      {
         if (health < 0)
         {
            health = 10;
            return;
         }
         health = value;
      }
   }

   vasya.Health = 10;

   private int Health;

   public int GetHealth()
   {
      if (Health > 50)
      {
         return Health;
      }
      else
      {
         return 10;
      }
   }

   public void SetHealth(int health)
   {
      if (health < 0)
      {
         Health = 10;
         return;
      }
      Health = health;
   }

   Enemy petya = new Enemy();
   petya.SetHealth(100);
   int h = petya.GetHealth();

   petya.Health = 100;
   int h = petya.Health;
}
*/

class Unit extends UnitSpec {
    constructor(spec, name, health, mana, stamina) {
        super(spec); //вызов конструктора базового класса

        let _name = ''
        let _health = 0; //private
        let _mana = 0; //private
        let _stamina = 0; //private

        this.getName = function() {
            return _name;
        }
        this.getHealth = function () {
            return _health;
        }
        this.getStamina = function () {
            return _stamina;
        }
        this.getMana = function () {
            return _mana;
        }

        this.setName = function(name) {
            if (name) {
                _name = name
                return
            }

            throw new UnitError('Incorrect Name value')
        }

        this.addMana = function (mana = 0) {
            if (!isNaN(parseInt(mana))) {// если parseInt(mana) нормальное число, а не абракадабра
                if (mana >= 0 && _mana + mana <= UNIT_CFG.MAX_MANA) {// если mana >= 0 - и _mana (которая была у текущего обЪекта ) + mana (которую хотим добавить) меньше максимальное значение магии, то тогда добавить магии
                    _mana += mana;// к текущей магии прибавляем, которую хотм добавить
                } else {
                    throw new UnitError("Incorrect Mana value");
                }
            } else {
                throw new UnitError("Vrong datatype Mana value");
            }
        }

        this.setStamina = function (stamina) {
            if (!isNaN(parseInt(stamina))) {
                if (stamina >= 0 && stamina <= UNIT_CFG.MAX_STAMINA) {
                    _stamina = stamina;
                } else {
                    throw  new UnitError("Incorrect stamina value");
                }
            } else {
                throw new UnitError("Vrong datatype stamina value");
            }
        }
        this.turnDownHealth = function (damage) {
            // if (_health - damage < 0) {
            //     throw new UnitError('too much damage');
            // }
            _health -= damage;// отнимаем жизни
        }
        this.attack = function (unit, damage) {// если в unit передали tiger, то его сейчас атакует тигр пантеру и тигр наносит урон 15
            if (!unit) {
                console.log(colors.bgWhite(colors.black('There must be attacked unit')))
                return
            }

            if (unit === this) {
                console.log(colors.bgWhite(colors.black('Unit cannot attack itself')))
                return
            }

            console.log(colors.green(`${this.Name} attacked ${unit.Name}!`))
            unit.turnDownHealth(this.getDamageBuff() * damage);// урон с учетом конкретного персонажа, unit.turnDownHealth - уменьшает здоровье
        }
        this.setHealth = function (health) {// ставит здоровье, через условие
            if (!isNaN(parseInt(health))) {
                if (health >= 0 && health <= UNIT_CFG.MAX_HEALTH) {
                    _health = health;
                } else {
                    throw  new UnitError("Incorrect health value");
                }
            } else {
                throw new UnitError("Vrong datatype health value");
            }
        }

        this.setName(name)
        this.setHealth(health);
        this.addMana(mana);
        this.setStamina(stamina);
    }

    get Name() {
        return this.getName()
    }

    set Name(name) {
        this.setName(name)
    }

    get Health() { //"ПолЕ для чтения"
        return this.getHealth();
    }

    set Health(health) { //"ПолЕ для записи"
        this.setHealth(health);
    }

    get Mana() { //"ПолЕ для чтения"
        return this.getMana();
    }

    set Mana(mana) { //"ПолЕ для записи"
        this.addMana(mana);
    }

    get Stamina() { //"ПолЕ для чтения"
        return this.getMana();
    }

    set Stamina(stamina) { //"ПолЕ для записи"
        this.setMana(stamina);
    }

    toString() {
        return colors.red("Unit: " +
            "Name: " + this.Name + "; " +
            "Health: " + this.Health + "; " +
            "Mana: " + this.Mana + "; " +
            "Stamina: " + this.Stamina + ";");
    }
}

if (module.parent != null) {
    module.exports = Unit;
} else {
    console.log(colors.red("Module: Unit"));
}
