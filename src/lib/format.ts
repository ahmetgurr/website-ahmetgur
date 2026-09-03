export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('tr-TR', { dateStyle: 'long' }).format(new Date(dateString))
}

type LexicalNode = {
  text?: string
  children?: LexicalNode[]
  [key: string]: unknown
}

function extractText(node: LexicalNode): string {
  let text = node.text ? `${node.text} ` : ''
  if (Array.isArray(node.children)) {
    for (const child of node.children) text += extractText(child)
  }
  return text
}

export function getReadingTime(content: { root: LexicalNode }): number {
  const wordCount = extractText(content.root).trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(wordCount / 225))
}
