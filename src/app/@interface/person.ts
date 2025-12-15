export interface Person {
  name: string,
  age: number,
  height?: number
}

export interface Props {
  propsName: string,
  amount: number
}

export interface User {
  userName: string,
  lev: number,
  // props: Props[];
  props: Array<Props>
}

export interface UserTwo {
  userName: string,
  lev: number,
  props: {
    propsName: string,
    amount: number
  }[];
}
