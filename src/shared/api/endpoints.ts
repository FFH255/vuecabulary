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