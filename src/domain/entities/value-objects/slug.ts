export class Slug {
  private readonly value: string

  public constructor(value: string) {
    this.value = value
  }

  public get Value(): string {
    return this.value
  }

  /**
   * Receives a string and normalize it as a slug.
   *
   * Example: "An example title" -> "an-example-title"
   *
   * @param {string} text The text that needs to be normalized
   * @returns {Slug} A `Slug` class instance
   */
  public static createFromText(text: string): Slug {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')

    return new Slug(slugText)
  }
}
