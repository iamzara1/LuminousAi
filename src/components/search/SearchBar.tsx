"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type Token = {
  id: string
  name: string
  symbol: string
  thumb: string
}

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Token[]>([])
  const [loading, setLoading] = useState(false)

  const router = useRouter()


  useEffect(() => {
    const timer = setTimeout(() => {

      if (query.trim()) {
        searchTokens(query)
      } else {
        setResults([])
      }

    }, 700)


    return () => clearTimeout(timer)

  }, [query])


  async function searchTokens(value: string) {

    try {

      setLoading(true)

      const res = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(value)}`
      )


      if (!res.ok) {
        console.log("CoinGecko error:", res.status)
        setResults([])
        return
      }


      const data = await res.json()


      const filtered = data.coins
        .filter((coin: Token) =>
          coin.name &&
          coin.symbol &&
          coin.id
        )
        .slice(0, 8)


      setResults(filtered)


    } catch (error) {

      console.error("Search error:", error)
      setResults([])

    } finally {

      setLoading(false)

    }

  }



  return (

    <div className="relative w-full">


      <input

        value={query}

        onChange={(e) =>
          setQuery(e.target.value)
        }

        placeholder="Search tokens..."

        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none"

      />



      {loading && (

        <p className="mt-2 text-sm text-gray-400">
          Searching...
        </p>

      )}



      {results.length > 0 && (

        <div className="absolute z-50 mt-2 w-full rounded-2xl border border-white/10 bg-black p-3">


          {results.map((token) => (

            <button

              key={token.id}

              onClick={() =>
                router.push(`/token/${token.id}`)
              }

              className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/10"

            >

              <img

                src={token.thumb}

                alt={token.name}

                className="h-8 w-8 rounded-full"

              />


              <div className="text-left">

                <p className="font-semibold text-white">
                  {token.name}
                </p>


                <p className="text-sm uppercase text-gray-400">
                  {token.symbol}
                </p>

              </div>


            </button>

          ))}


        </div>

      )}


    </div>

  )
}
