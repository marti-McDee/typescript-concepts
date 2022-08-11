let id: number = 5
let company: string = 'Geffen Records'
let isPublished: boolean = true
let x: any = 'Hello'

x = 30

let ids: number[] = [1, 2, 3, 4, 5,]

// tuple
let person: [number, string, boolean] = [23, 'David', false]


// tuple array
let employee: [number, string][]

employee = [
  [1, 'Hank'],
  [2, 'Walt'],
  [3, 'Marie']
]


// Union
let pid: string | number | boolean = 'hi'


// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}


// Objects
type User = {
  id: number,
  name: string,
  age?: number
}

const user: User = {
  id: 1,
  name: 'David'
}

const uid = user.id = 4
// console.log('user id: ' + uid)

// Type Assertion
let cid: any = '1'
// let cxid = cid as number
let cxid = <number>cid


// Functions
function addNum(x: number, y: number): number {
  return x + y
}

// console.log(addNum(1, 3))

function log(message: string | number): void {
  // console.log(message)
}

log(3)


// Interfaces
interface UserInterface {
  readonly id: number,
  name: string
}

const user1: UserInterface = {
  id: 1,
  name: 'David'
}

// user1.id = 5   // cannot be assigned to readonly property

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
// console.log(add(2,3))


// Classes
interface PersonInterface {
  id: number,
  name: string
  register(): string
}

class Person implements PersonInterface {
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }

  id: number
  name: string
}

const david = new Person(1, 'David')
const jack: Person = new Person(3, 'Jack')
// console.log(david.register())
// console.log(jack.register())


// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(2, 'Adam', 'Musician')
// console.log(emp.register())


// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray (['brad', 'john', 'jill']) as string[]

numArray.push(0)
strArray.push('jack')

// console.log(numArray)
// console.log(strArray)



interface IApp {
  name: string
  type: string
}

class App implements IApp {
  name: string
  type: string

  constructor(name: string, type: string){
    this.name=name
    this.type = type
  }
}

class Developer {
  static develop(app: IApp) {
    return `developing ${app.name} for ${app.type}`
  }
}

const app = new App('whatsapp', 'mobile')
console.log(Developer.develop(app))