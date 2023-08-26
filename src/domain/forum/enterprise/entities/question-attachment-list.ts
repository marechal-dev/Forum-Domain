import { WatchedList } from '@/core/entities/watched-list'
import { QuestionAttachment } from './question-attachment'

export class QuestionAttachmentList extends WatchedList<QuestionAttachment> {
  public compareItems(a: QuestionAttachment, b: QuestionAttachment): boolean {
    return a.attachmentId.toString() === b.attachmentId.toString()
  }
}
