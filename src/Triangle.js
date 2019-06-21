export class Triangle {
  constructor (a, b, c) {
    if (
      arguments.length >= 4 ||
      !a || !b || !c ||
      a < 0 || b < 0 || c < 0 ||
      !Number.isInteger(a) ||
      !Number.isInteger(b) ||
      !Number.isInteger(c)
    ) {
      this.type = 'Error'
      return this
    }

    if (a + b <= c ||
      a + c <= b ||
      b + c <= a
    ) {
      this.type = 'R1'
      return this
    }

    if (
      a + b > c ||
      a + c > b ||
      b + c > a
    ) {
      this.type = 'R2'
    }

    if (
      (a === b && b !== c) ||
      (a === c && c !== b) ||
      (b === c && c !== a)
    ) {
      this.type = 'R3'
    }

    if (a === b && b === c) {
      this.type = 'R4'
    }
  }
}
