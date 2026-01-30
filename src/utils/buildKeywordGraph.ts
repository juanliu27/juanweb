import type { papers } from "@/app/data/papers"

export type KeywordNode = {
  id: string
  label: string
  papers: papers[]
}

export type KeywordLink = {
  source: string
  target: string
  weight: number
}

/**
 * 把 papers[] 转成：
 * - 唯一 keyword 节点
 * - keyword ↔ keyword 共现关系
 */
export function buildKeywordNetwork(papers: papers[]) {
  const keywordMap = new Map<string, KeywordNode>()
  const linkMap = new Map<string, number>()

  // 1️⃣ 构建 keyword → papers 映射
  for (const paper of papers) {
    for (const kw of paper.keywords) {
      if (!keywordMap.has(kw)) {
        keywordMap.set(kw, {
          id: kw,
          label: kw,
          papers: [],
        })
      }
      keywordMap.get(kw)!.papers.push(paper)
    }
  }

  // 2️⃣ 构建 keyword–keyword 共现关系
  for (const paper of papers) {
    const kws = paper.keywords

    for (let i = 0; i < kws.length; i++) {
      for (let j = i + 1; j < kws.length; j++) {
        const a = kws[i]
        const b = kws[j]
        const key = [a, b].sort().join("::")

        linkMap.set(key, (linkMap.get(key) ?? 0) + 1)
      }
    }
  }

  const nodes = Array.from(keywordMap.values())

  const links: KeywordLink[] = Array.from(linkMap.entries()).map(
    ([key, weight]) => {
      const [source, target] = key.split("::")
      return { source, target, weight }
    }
  )

  return { nodes, links }
}
