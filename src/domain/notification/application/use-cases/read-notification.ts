import { Either, left, right } from '@/core/either'
import { Notification } from '../../enterprise/entities/notification'
import { NotificationsRepository } from '../repositories/notifications-repository'
import { ResourceNotFoundError } from '@/domain/forum/application/use-cases/errors/resource-not-found-error'

interface ReadNotificationUseCaseRequest {
  notificationId: string
}

type ReadNotificationUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    notification: Notification
  }
>

export class ReadNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute({
    notificationId,
  }: ReadNotificationUseCaseRequest): Promise<ReadNotificationUseCaseResponse> {
    const notification = await this.notificationsRepository.findById(
      notificationId,
    )

    if (!notification) {
      return left(new ResourceNotFoundError())
    }

    await this.notificationsRepository.save(notification)

    return right({
      notification,
    })
  }
}
