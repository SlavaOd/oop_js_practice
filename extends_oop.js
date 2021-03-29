// Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, 
// как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), 
// surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), 
// с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), 
// который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. 
// Текущий год получите самостоятельно.

// class User {    
//     constructor(name,surname,year) {
//         this.name = name;
//         this.surname = surname;
//         this.year = year;
//     }

//     getFullName() {
//         return 'Полное имя: ' + this.name + ' ' + this.surname;
//     }

//     getCourse() {
//         var date = new Date
//         return 'Курс: ' + (date.getFullYear() - this.year)
//     }

// }

// class Student extends User {
//     // super()

// }

// var student = new Student('Иван', 'Иванов', 2018);


// console.log(student.getFullName());
// console.log(student.getCourse());


