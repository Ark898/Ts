// tsc  --> compile
// tsc --init  --> create tsconfig.json
// tsc --watch  --> watch mode
// npm i typescript -g   --> install typescript globally
// tsc --version  --> check typescript version
// npm i typescript --save-dev  --> install typescript locally
// tsc app.ts  --> compile specific file


/*
  Basic Types
  1. Primitives Types
  2. Reference Types {},[],()

  Primitives Types:
  Number(12,12.34), String("hello"), Boolean(true/false), Null, Undefined, Symbol, BigInt

let a:number=12
a="harsh"  error: Type 'string' is not assignable to type 'number'.

let s:string="hello"
let b:boolean=true

let n:null=null
let u:undefined=undefined

let array:number[]=[1,2,3,4]

Tuples
let arr:[number,string,boolean]=[1,"hello",true]

Enums
enum User{
  ADMIN=1,
  USER=2,
  GUEST=3
}
let user:User=User.ADMIN

Any  --> switch off type checking
let a:any=12
a="harsh"
a=true

Unknown  --> requires type checking before assignment like a.uppercase() or a.toString()
let a:unknown=12
a="harsh"
a=true

void --> function return type
function add():void{
  console.log("hello")
}

function add():number{
  return 12;
}

*/


/*

Type inference --> TypeScript can automatically determine the type of a variable based on its value.
Type annotation --> TypeScript allows you to explicitly specify the type of a variable, function parameter, or return value using type annotations.
eg. let a:number | boolean | string;
    function add(a:number,b:number):number{
      return a+b;
    }

*/

/*
Interfaces --> Interfaces are used to define the structure of an object, including its properties and their types. They provide a way to enforce a contract for objects and can be implemented by classes.
interface User{
  name:string;
  age:number;
  isAdmin:boolean;
}

function getDateofUser(obj:User):string{
}

getDateofUser({name:"harsh",age:12,isAdmin:true});  

Extending Interfaces --> Interfaces can be extended to create new interfaces that inherit the properties of the base interface. This allows for code reuse and the creation of more specialized interfaces.

interface Admin extends User{
  role:string;
}

Interfaces Merging --> TypeScript allows you to merge multiple interface declarations with the same name into a single interface. This can be useful when you want to add additional properties or methods to an existing interface without modifying its original definition.
interface User{
  name:string;
  age:number;
}
interface User{
  isAdmin:boolean;
}

*/

/*
Type of aliases -- Type aliases allow you to create a new name for a type, making it easier to refer to complex types or union types. They can be used to define custom types, function signatures, or even entire object structures.
type User={
  name:string;
  age:number;
  isAdmin:boolean;
}

let a:User={name:"harsh",age:12,isAdmin:true}

type value=number | string | boolean;
let a:value=12

Intersection Types --> Intersection types allow you to combine multiple types into a single type. This is useful when you want to create a new type that has all the properties of multiple existing types.
type User={
  name:string;
  email:string;
}

type Admin=User & {role:string};
let a:Admin={name:"harsh",email:"harsh@example.com",role:"administrator"}
 */


/*
  
class User {
  username: string;
  age: number;

  constructor(username: string, age: number) {
    this.username = username;
    this.age = age;
  }

  sayHello(): string {
    return `Hello, my name is ${this.username}.`;
  }
}

const user1 = new User("Alice", 28);
console.log(user1.sayHello()); // "Hello, my name is Alice."

*/

class User{
  public username:string;
  public age:number;

  constructor(username:string,age:number){
    this.username=username;
    this.age=age;
  }
}

const user1=new User("Alice", 28);


// Public, Private, Protected -->Access Modifiers
class User1{
  public username:string;
  private age:number;
  protected email:string;

  constructor(username:string,age:number,email:string){
    this.username=username;
    this.age=age;
    this.email=email;
  }
}

const user2=new User1("Alice", 28,"alice@example.com");


class BottleMaker{
  public company:string;  
  // private company:string;
  // protected company:string;
   constructor(company:string){
    this.company=company;
   }
}

class MetalBottleMaker extends BottleMaker{
  constructor(company:string){
    super(company);
  }

  getCompany():string{
    return this.company;
  }
}

const bottleMaker=new MetalBottleMaker("ABC Company");
console.log(bottleMaker.getCompany()); // Output: "ABC Company"


// Readonly --> Readonly properties can only be assigned a value during initialization or in the constructor of the class. Once assigned, their values cannot be changed.
// class User2{
//   public readonly username:string;
//   public readonly age:number;
// }


//Parameter Properties --> TypeScript provides a shorthand syntax for defining and initializing class properties directly in the constructor parameters. This feature is called parameter properties. By using parameter properties, you can declare and initialize class properties in a more concise way, reducing boilerplate code.
class User3{
  constructor(public username:string,public age:number){
  }
}


//Getters and Setters --> Getters and setters are special methods in a class that allow you to define custom behavior for accessing and modifying the values of class properties. Getters are used to retrieve the value of a property, while setters are used to set or update the value of a property.
//Normal approach
class User4{
  public username:string;

  constructor(username:string){
    this.username=username;
  }

  getName():string{
    return this.username;
  }
  setName(value:string){
    this.username=value;
  }
}

const user4=new User4("Alice");
user4.getName(); // "Alice"
user4.setName("Bob");
user4.getName(); // "Bob"

//Setters and Getters approach
class User5{
  private _username:string;
  constructor(username:string){
    this._username=username;
  }

  get username():string{
    return this._username;
  }

  set username(value:string){
    this._username=value;
  }
}

const user5=new User5("Alice");
console.log(user5.username); // "Alice"
user5.username = "Bob";
console.log(user5.username); // "Bob"
 

//Static Properties and Methods --> Static properties and methods belong to the class itself rather than to instances of the class. They can be accessed directly on the class without creating an instance. Static members are often used for utility functions or shared data that doesn't depend on individual instances.
class User6{
  public static count:number=0;
  static incrementCount():void{
    User6.count++;
  }
}

User6.incrementCount();
console.log(User6.count); // 1

//Abstract Classes --> Abstract classes are classes that cannot be instantiated directly. They are meant to be extended by other classes. Abstract classes can contain both abstract methods (methods without implementation) and concrete methods (methods with implementation). Subclasses must provide implementations for the abstract methods.
class User7{
  public username:string;
  constructor(username:string){
    this.username=username;
  }
} 

class Admin extends User7{
  public role:string;
  constructor(username:string,role:string){
    super(username);
    this.role=role;
  }
}

const admin=new Admin("Alice","Administrator"); 


//Functions

//Optional Parameters --> In TypeScript, you can define optional parameters in functions by appending a question mark (?) to the parameter name. Optional parameters allow you to call a function without providing a value for that parameter. If the parameter is not provided, it will be undefined within the function.
function abcd(name:string,age?:number){
}

abcd("Alice"); // Valid, age is optional
abcd("Alice",28); // Valid, age is provided

//Rest Parameters --> Rest parameters allow you to represent an indefinite number of arguments as an array. You can use the rest parameter syntax (...) to collect multiple arguments into a single array parameter.
function sum(...arr:number[]):void{
  console.log(arr);
}

sum(1,2,3,4,5,6,7,8,9,10); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 


//  let arr=[1,2,3,4,5,6,7,8,9,10];
//  let arr1=[...arr];  // spread operator

// Function Overloading --> Function overloading allows you to define multiple function signatures for a single function, enabling it to handle different combinations of parameter types and return types. This feature is useful when you want to provide different behaviors based on the input parameters.
function add(a:number,b:number):number;
function add(a:string,b:string):string;

function add(a:any,b:any):any{
  return a+b;
}

add(1,2); // Output: 3
add("Hello, ","World!"); // Output: "Hello, World!"

//Generics  --> Generics allow you to create reusable components that can work with different types while maintaining type safety. They enable you to define functions, classes, and interfaces that can operate on a variety of data types without sacrificing type checking.
// Generic Functions --> You can define generic functions that accept type parameters, allowing you to specify the types of the function's arguments and return value when calling the function.
function abc<T>(a:T):T{
  return a;
}

abc<number>(12); // Output: 12 
abc<string>("Hello"); // Output: "Hello"

// Interfaces with Generics --> You can use generics in interfaces to define the types of properties or methods. This allows you to create flexible and reusable interfaces that can work with different data types.
interface User09<T>{
  name:string;  
  age:T;
}

function getUser(user:User09<number>):void{
  console.log(user.name);
  console.log(user.age);
}
getUser({name:"Alice",age:28}); // Output: "Alice" 28

// Generic Classes --> You can create generic classes that can work with different types. This allows you to define class properties and methods that can operate on various data types while maintaining type safety.

class User10<T>{
  name:string;
  age:T;
  constructor(name:string,age:T){
    this.name=name;
    this.age=age;
  }
}

new User10<number>("Alice",28); // Output: "Alice" 28


// Imp. Case of Generics
function identity<T>(a:T,b:T): T {
  // return "Hey"; error becoz it is a string literal
  return <T>"Hey"; // Type assertion to T
}
identity<string>("Hello","World"); // Output: "Hey"


//Modules --> Modules are a way to organize and encapsulate code in TypeScript. They allow you to split your code into separate files, each with its own scope, and import/export functionality between them. Modules help in maintaining a clean and modular codebase, making it easier to manage dependencies and reuse code across different parts of an application.
import processPayment  from "./payment.js";
processPayment(100);

//Type Guards --> Type guards are a way to narrow down the type of a variable within a specific block of code. They allow you to perform runtime checks on the type of a variable and provide type information to the TypeScript compiler, enabling better type inference and preventing potential runtime errors.
function abcde(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // TypeScript knows value is a string here
  } else {
    console.log(value.toFixed(2)); // TypeScript knows value is a number here
  }
}

class TvKaRemote{
  switchOn():void{
    console.log("TV is switched on");
  }
}

class AcKaRemote{
  switchOn():void{
    console.log("AC is switched on");
  }
}

const remote: TvKaRemote | AcKaRemote = new TvKaRemote();
if (remote instanceof TvKaRemote) {
  remote.switchOn(); // TypeScript knows remote is TvKaRemote here
}

const remote1: TvKaRemote | AcKaRemote = new AcKaRemote();
if (remote1 instanceof AcKaRemote) {
  remote1.switchOn(); // TypeScript knows remote is AcKaRemote here
}
