import dayjs from 'dayjs'

import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { Entity } from '@/core/entities/entity'
import { Optional } from '@/core/types/optional'

interface AnswerProps {
  authorId: UniqueEntityId
  questionId: UniqueEntityId
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  public static create(
    props: Optional<AnswerProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const answer = new Answer(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return answer
  }

  private touch(): void {
    this.props.updatedAt = new Date()
  }

  public get authorId(): UniqueEntityId {
    return this.props.authorId
  }

  public get questionId(): UniqueEntityId {
    return this.props.questionId
  }

  public get content(): string {
    return this.props.content
  }

  public get isNew(): boolean {
    return dayjs().diff(this.createdAt, 'days') <= 3
  }

  public get excerpt(): string {
    return this.content.substring(0, 120).trimEnd().concat('...')
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }

  public get updatedAt(): Date | undefined {
    return this.props.updatedAt
  }

  public set content(content: string) {
    this.props.content = content
    this.touch()
  }
}
