// I. Створення класу об’єктів
class Person {
    constructor(name, age, occupation, nationality) {
      this.name = name;
      this.age = age;
      this.occupation = occupation;
      this.nationality = nationality;
    }
  
    printInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Occupation: ${this.occupation}, Nationality: ${this.nationality}`);
    }
}

let person1 = new Person('John Doe', 30, 'Software Engineer', 'American');
let person2 = new Person('Jane Smith', 28, 'Data Scientist', 'Canadian');
let person3 = new Person('Ivan Ivanov', 35, 'System Administrator', 'Ukrainian');

person1.printInfo();
person2.printInfo();
person3.printInfo();

// II. Наслідування класів
class Component {
    constructor(selector) {
      this.el = document.querySelector(selector);
    }
  
    blockHide() {
      this.el.style.display = 'none';
    }
  
    editColor(color) {
      this.el.style.color = color;
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);
        
        this.el.style.width = options.width + 'px';
        this.el.style.height = options.height + 'px';
        this.el.style.backgroundColor = options.color;
    }
}

const box1 = new Box({
    selector: '#box1',
    width: 1000,
    height: 50,
    color: 'blue'
});

// Перевірити чи наслідує об’єкт box1 дочірнього класу Box методи батьківського класу Component.
console.log(box1 instanceof Component); // повинно вивести true, якщо box1 успадковує від Component
box1.blockHide(); // повинно приховати елемент
box1.editColor('green'); // повинно змінити колір тексту елемента на зелений
