// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
// который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же строку, 
// сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной 
// первую букву каждого слова этой строки.

class MyString {
    constructor() {

    }
    reverse(rev) {
        return rev.split('').reverse().join('')
    }
    ucFirst(up) {
        return up[0].toUpperCase() + up.substring(1)
    }
    ucWords(words) {
        var arrs = words.split(' ')
        var i
        var newArr = []
        for (i=0; i < arrs.length;i++) {
            newArr.push(this.ucFirst(arrs[i])) 
        }
        return newArr.join(' ')
    }
}


var str = new MyString();

console.log(str.reverse('abcde'))
console.log(str.ucFirst('abcde'))
console.log(str.ucWords('maxim denis alex olga'))


// Реализуйте класс Validator, который будет проверять строки.
// К примеру, у него будет метод isEmail параметром принимает строку и проверяет, 
// является ли она корректным емейлом или нет. Если является - возвращает true, 
// если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для 
// проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:

class Validator {
    constructor() {

    }
    isEmail(mail) {
        var arrMail = mail.split('');
        var i
        for(i = 0; i < arrMail.length; i++) {
            if (arrMail[i] == '@') {
                return 'mail is ' + true
            }
        }
        return 'mail is ' + false
    }
    isDomain(domain) {
        var arrDomain = domain.split('.');
        var k
        var domainList = ['net','ru','com']
        var j
        for(k = 0; k < arrDomain.length; k++) {
            
            for (j=0;j<domainList.length;j++){
                if (arrDomain[k] == domainList[j]) {
                    return 'domain is ' + true 
                }
            }
        }
        return 'domain is ' + false
    }
    isDate(date) {
        var arrDate = date.split('.');
        if (arrDate[0] > 0 && arrDate[0] <= 31 && arrDate[1] > 0 && arrDate[1] <= 12 && arrDate[2] > 2000 && arrDate[2] < 2021) {
            return 'date is ' + true
        } else {
            return 'date is ' + false
        }
        
    }

    isPhone(isPhone) {
        var arrNum = isPhone.split(' ')
        if (arrNum[0] == '+380') {
            return 'tel is ' + true
        } else {
            return 'tel is ' + false
        }
    }
    
}

var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.ru'));
console.log(validator.isDate('31.12.2020'));
console.log(validator.isPhone('+380 (29) 817-68-92')); //тут можете формат своей страны