import { BASE_URL } from "../config"
import { useQuery } from "./useQuery"
import { baseQuery } from "./baseQuery"
import { isDictionary } from "./types"

const query = baseQuery(BASE_URL)

const getDictionaryQuery = () => query({
  url: 'dictionary.json',
  transform: async (res) => {
    const data = await res.json()
    return isDictionary(data) ? data : {}
  }
})

export const useGetDictionaryQuery = useQuery(getDictionaryQuery)

const getImageQuery = (params: { letter: string; id: number }) =>
  query({
    url: `img/${params.letter}/${params.id}.png`,
    transform: async (res) => {
      const blob = await res.blob()
      return URL.createObjectURL(blob)
    },
  })

export const useGetImageQuery = useQuery(getImageQuery)