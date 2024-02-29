interface IQueryParams<T> {
  url: string
  transform: (res: Response) => Promise<T> | T
}

export function baseQuery(baseUrl: string) {
  return async function query<T>({ url, transform }: IQueryParams<T>) {
    const response = await fetch(baseUrl + url)
    const data = await transform(response)
    return data
  }
}