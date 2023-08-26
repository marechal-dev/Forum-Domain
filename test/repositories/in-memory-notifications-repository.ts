import { NotificationsRepository } from '@/domain/notification/application/repositories/notifications-repository'
import { Notification } from '@/domain/notification/enterprise/entities/notification'

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public items: Notification[] = []

  public async create(notification: Notification): Promise<void> {
    this.items.push(notification)
  }

  public async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.items.find(
      (item) => item.id.toString() === notificationId,
    )

    if (!notification) {
      return null
    }

    return notification
  }
}
