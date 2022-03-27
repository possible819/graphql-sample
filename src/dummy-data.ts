export interface User {
  id: number
  name: string
  age: number
  companyId: number
}

export const dummyUsers = Array.from({ length: 20 }, (_, idx) => {
  return {
    id: idx + 1,
    name: `Sample User ${idx + 1}`,
    age: Math.floor(Math.random() * 20),
    companyId: (idx % 3) + 1,
  }
}) as User[]

export interface Company {
  id: number
  name: string
}

export const dummyCompanies = Array.from({ length: 3 }, (_, idx) => {
  return {
    id: idx + 1,
    name: `Sample Company ${idx + 1}`,
  }
}) as Company[]
