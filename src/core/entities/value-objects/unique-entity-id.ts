import { randomUUID } from 'node:crypto'

export class UniqueEntityId {
  private readonly value: string

  public constructor(value?: string) {
    this.value = value ?? randomUUID()
  }

  public toString() {
    return this.value
  }

  public toValue() {
    return this.value
  }
}
