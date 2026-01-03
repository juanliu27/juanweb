// src/lib/text.ts

// 估算中文为“字符/分钟”，英文为“词/分钟”，混排也可用
export function calcReadingMinutes(content: string): number {
    if (!content) return 1;
    const plain = strip(content);
    // 统计英文词 & 汉字数
    const words = (plain.match(/[A-Za-z0-9]+(?:'[A-Za-z0-9]+)?/g) || []).length;
    const han   = (plain.match(/[\u4e00-\u9fa5]/g) || []).length;
  
    // 粗略速度：英文 ~220词/分钟；中文 ~500字/分钟
    const minutesEn  = words / 220;
    const minutesHan = han   / 500;
  
    const m = Math.max(1, Math.round(minutesEn + minutesHan));
    return m;
  }
  
  export function makeExcerpt(content: string, limit = 160): string {
    if (!content) return "";
    const plain = strip(content);
  
    // 优先截到句号/换行处
    const end = findCutPoint(plain, limit);
    return plain.slice(0, end).trim() + (plain.length > end ? "…" : "");
  }
  
  function strip(s: string): string {
    // 去掉 Markdown/HTML 的最小化处理
    return s
      .replace(/```[\s\S]*?```/g, "")      // 代码块
      .replace(/`[^`]*`/g, "")             // 行内代码
      .replace(/!\[[^\]]*\]\([^)]+\)/g, "")// 图片
      .replace(/\[[^\]]*\]\([^)]+\)/g, "") // 链接
      .replace(/[#>*_~>-]+/g, "")          // 标记符
      .replace(/<\/?[^>]+>/g, "")          // HTML 标签
      .replace(/\s+/g, " ")                // 压缩空白
      .trim();
  }
  
  function findCutPoint(text: string, hardLimit: number): number {
    if (text.length <= hardLimit) return text.length;
    const slice = text.slice(0, hardLimit + 20); // 给一点缓冲方便找句点
    const punct = slice.search(/[。！？!?]\s|[\n\r]/);
    if (punct > 40) return punct + 1; // 有合适的句末就到句末
    return hardLimit;                 // 否则硬截
  }
  