console.log("This is Class Syntax")

//!Class Syntax
//?Use the keyword class to create a class.
//?Always add a method named constructor():

//!The Constructor Method
//?The constructor method is a special method:
//It has to have the exact name "constructor"
//It is executed automatically when a new object is created
//It is used to initialize object properties
//If you do not define a constructor method, JavaScript will add an empty constructor method.

//!Class Methods
//?Class methods are created with the same syntax as object methods.
//?Use the keyword class to create a class.
//?Always add a constructor() method.
//?Then add any number of methods.

//!Syntax
// class ClassName {
//   constructor() { ... }
//   method_1() { ... }
//   method_2() { ... }
//   method_3() { ... }
// }

console.log("This is Class inheritance")

//!Class Inheritance
//?To create a class inheritance, use the extends keyword.
//?A class created with a class inheritance inherits all the methods from another class:

class Grandparent{
    constructor(name){
        this.grandparentname = name;
    }
    present(){
        return 'My Grandfather name is ' + this.grandparentname;
    }
}

class Parent extends Grandparent {
    constructor(name,name2){
        super(name);
        this.parentName = name2;
        
    }
    show() {
        return this.present() +' and my dad name is ' + this.parentName;
    }

}

let myFamily = new Parent("Bani", "Demyati");
console.log(myFamily.show())

//?The super() method refers to the parent class.
//?By calling the super() method in the constructor method, 
//?we call the parent's constructor method and gets access to the parent's properties and methods.

//!Hoisting
//?Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
//?That means that you must declare a class before you can use it:
//Note: For other declarations, like functions, you will NOT get an error when you try to use it before it is declared, 
//because the default behavior of JavaScript declarations are hoisting (moving the declaration to the top).

//!Getters and Setters
//?Classes also allows you to use getters and setters.
//?It can be smart to use getters and setters for your properties, especially 
//?if you want to do something special with the value before returning them, or before you set them.
//?To add getters and setters in the class, use the get and set keywords.

class Husband{
    constructor(name){
        this.husbandname = name;
    }
    get husband_name() {
        return "My name is "+ this.husbandname;
    }
    set husband_name(x){
        this.husbandname = x;
    }
}

let myName = new Husband("Adam");
console.log(myName.husband_name);

//?Note: even if the getter is a method, you do not use parentheses when you want to get the property value.
//?The name of the getter/setter method cannot be the same as the name of the property, in this case husbandname.
//?Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:

//To use a setter, use the same syntax as when you set a property value, without parentheses:

class Wife{
    constructor(name){
        this.wifename = name;
    }
    get wife_name(){
        return "My wife nick name is " + this.wifename;
    }
    set wife_name(x){
        this.wifename =x;
    }
}

let myWife = new Wife("Sofea");
myWife.wife_name = "black plum";
console.log(myWife.wife_name);