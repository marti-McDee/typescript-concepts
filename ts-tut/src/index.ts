// type aliases

type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => (void)
}

let employee: Employee = {
  id: 1,
  name: 'Marti',
  retire: (date: Date) => {
    console.info(date)
  }
}

employee.retire(new Date("2052-08-05"))


// union types

function kgToLbs(weight: number | string): number {
  // narrowing
  if (typeof weight === 'number') {
    return weight * 2.2
  }
  else {
    return parseInt(weight) * 2.2
  }
}

kgToLbs(10)
kgToLbs('10kg')


type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
  drag: () => { },
  resize: () => { }
}

// Literal (exact, specific value)
type Quantity = 50 | 100
let quantity: Quantity = 100

type Metric = 'cm' | 'in'


// Nullable Types
function greet(name: string = 'stranger') {
  if (name)
    console.log(name.toUpperCase())
  else
    console.log(`Hola!`)
}

greet()

// Optional Chaining
type Customer = {
  birthday: Date
}

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0)
// Optional property access operator
console.info(customer?.birthday)