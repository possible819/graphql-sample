export interface User {
  id: number
  name: string
  age: number
}

const users: User[] = Array.from({ length: 200 }, (_, idx) => {
  return {
    id: idx + 1,
    name: `User ${idx + 1}`,
    age: Math.floor(Math.random() * 100),
  }
})

export default users
