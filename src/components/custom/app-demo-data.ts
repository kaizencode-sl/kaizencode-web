// Fixtures of the demo, copied from the iOS app's demo data

export const HOURS = [17, 18, 19]
export const TODAY = 3 // Wednesday (1 = Monday … 4 = Thursday, the academy's open days)
export const CURRENT = 2 // November, in the four months the demo shows (Sep–Dec)
export const FEES: Record<number, number> = { 2: 50, 3: 65, 4: 75 } // by weekly hours

export type Slot = [day: number, hour: number]
export interface Student {
  id: number
  course: string
  school: string
  slots: Slot[]
  active: boolean
}

export const students: Student[] = [
  {
    id: 1,
    course: "1 ESO",
    school: "Grisolía",
    slots: [
      [1, 18],
      [3, 18],
    ],
    active: true,
  },
  {
    id: 2,
    course: "1 ESO",
    school: "Hervás",
    slots: [
      [1, 18],
      [2, 18],
      [3, 18],
    ],
    active: true,
  },
  {
    id: 3,
    course: "2 ESO",
    school: "San José",
    slots: [
      [1, 19],
      [2, 19],
      [3, 19],
      [4, 19],
    ],
    active: true,
  },
  {
    id: 4,
    course: "2 ESO",
    school: "San José",
    slots: [
      [2, 18],
      [4, 18],
    ],
    active: true,
  },
  {
    id: 5,
    course: "3 ESO",
    school: "Pedro Mercedes",
    slots: [
      [1, 18],
      [1, 19],
      [3, 19],
    ],
    active: true,
  },
  {
    id: 6,
    course: "4 ESO",
    school: "Sagrada Familia",
    slots: [
      [2, 19],
      [4, 19],
    ],
    active: true,
  },
  {
    id: 7,
    course: "1 BACH",
    school: "Grisolía",
    slots: [
      [1, 19],
      [3, 18],
      [4, 18],
    ],
    active: true,
  },
  {
    id: 8,
    course: "2 BACH",
    school: "Hervás",
    slots: [
      [2, 18],
      [2, 19],
      [4, 18],
      [4, 19],
    ],
    active: true,
  },
  {
    id: 9,
    course: "3 ESO",
    school: "Grisolía",
    slots: [
      [1, 18],
      [3, 18],
    ],
    active: false,
  },
]
export const active = students.filter((s) => s.active)
export const fee = (s: Student) => FEES[s.slots.length] ?? 0
export const expectedIncome = active.reduce((sum, s) => sum + fee(s), 0)
// Rent and electricity every month, supplies only in the current one
export const expenses = [
  { key: 0, amount: 380, monthly: true },
  { key: 1, amount: 60, monthly: true },
  { key: 2, amount: 35, monthly: false },
]
export const expensesFor = (month: number) =>
  expenses.filter((e) => e.monthly || month === CURRENT)
