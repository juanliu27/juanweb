export function cn(...cls: Array<string | false | undefined>) {
    return cls.filter(Boolean).join(" ");
  }