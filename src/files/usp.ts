
const sumBetter = (a: number, b: number): number => {
  return a + b
}

const concat = (a: string, b: string): string =>{

  return a + b
}


const coerce=(a: string, b: number):string =>{

  return a + b
}

const badFunc=(a: string|number, b: string|number):string|number  =>{
  // return a+b
  return 0
}

const worstFunc = (a: any, b: any):any=> {
  return a + b
}

console.log(sumBetter(1,1))
console.log(concat('1','1'))
console.log(coerce("1",1))


export default sumBetter


