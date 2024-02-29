export type Dictionary = {
  [key: string]: {
    title: string
    description: string
  }[]
}

export function isDictionary(obj: any): obj is Dictionary {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const entries = obj[key];
      if (!Array.isArray(entries)) {
        return false;
      }

      for (const entry of entries) {
        if (
          typeof entry !== 'object' ||
          entry === null ||
          typeof entry.title !== 'string' ||
          typeof entry.description !== 'string'
        ) {
          return false;
        }
      }
    }
  }

  return true;
}