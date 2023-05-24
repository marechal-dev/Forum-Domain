import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { Entity } from '@/core/entities/entity'

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> {
  public static create(props: InstructorProps, id?: UniqueEntityId) {
    const student = new Instructor(props, id)

    return student
  }
}
