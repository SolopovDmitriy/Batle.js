'use strict';
const fs = require('fs');

class Logger {
    static pathDir = './errors/';

    static logError(error) {
        let data = JSON.stringify({
            code: error.code,
            date: new Date(),
            stack: error.stack// то , что привело к ошибке
        }) + "\n";
        fs.writeFile(Logger.pathDir + error.name + '.log', data, {// ./errors/my-new-file-name-error.log,let data = JSON.stringify
            encoding: 'utf8',
            flag: 'a'
        }, function (err) {
            if (err) throw err;
        })
    }

    static getLastErrors(errorType, count = 0, callback) {//выводит определенное колличество последних ошибок
        let pathToFile = Logger.pathDir + errorType + '.log';
        fs.stat(pathToFile, function (err, stats) {
            if (err) throw err;
            if (stats.isFile()) {
                fs.readFile(pathToFile, function (err, data) {
                    if (err) throw err;
                    /*
                    'артем
                    вася
                    петя
                    'маша

                    =>

                    ['артем', 'вася', 'петя', 'маша']
                     */
                    data = data.toString().split('\n');// из каждой новой
                    data.length--;
                    // 10
                    // count = 5

                    console.log(JSON.parse(data[0])) // print last errors


                    data = data.slice(data.length - count /* 10 - 5 = 5 */, data.length /* 10 */);
                    data.forEach(function (item, index) {
                        data[index] = JSON.parse(item); // from each string we are getting an object through parsing
                    });

                    data.forEach(n => console.log(n.date)) // print errors dates

                    if(typeof callback === 'function'){
                        callback(data);
                    }
                });
            }
        })
    }

    static dateCheck(from, to, check) {
        let fDate = Date.parse(from);
        let lDate = Date.parse(to);
        let cDate = Date.parse(check);// та которую проверяем в ходит ли она в диапозон
        return cDate <= lDate && cDate >= fDate;
    }

    static getErrorsForTime(errorType, dateStart, dateEnd, callback) {
        let pathToFile = Logger.pathDir + errorType + '.log';
        fs.stat(pathToFile, function (err, stats) {
            if (err) throw err;
            if (stats.isFile()) {
                fs.readFile(pathToFile, function (err, data) {
                    if (err) throw err;
                    data = data.toString().split('\n');
                    data.length--;

                    data.forEach(function (item, index) {
                        data[index] = JSON.parse(item);
                    });

                    data.forEach(unit => {
                        // console.log(dateStart)
                        // console.log(dateEnd)
                        // console.log(unit.date)
                        // console.log(unit.date >= dateStart)
                        // console.log(unit.date <= dateEnd)

                        if (Logger.dateCheck(dateStart, dateEnd, unit.date)) {// unit.date - дата текущего юнита , текущей ошибки, а dateStart - дата с которой хотим получить все ошибки, dateEnd - по какую дату
                            console.log(unit)
                        }
                    })

                    if(typeof callback === 'function'){
                        callback(data);
                    }
                });
            }
        })
    }
}

module.exports = Logger;