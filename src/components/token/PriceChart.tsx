"use client"

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

type PriceChartProps = {
  data: {
    time: number
    price: number
  }[]
}

export default function PriceChart({
  data,
}: PriceChartProps) {

  const chartData = data.map((item) => ({
    date: new Date(item.time).toLocaleDateString(),
    price: item.price,
  }))


  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-5 text-xl font-bold text-white">
        7 Day Price Chart
      </h2>


      <div className="h-[320px] w-full">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={chartData}>

            <XAxis
              dataKey="date"
              hide
            />

            <YAxis
              tickFormatter={(value) =>
                `$${value}`
              }
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="price"
              strokeWidth={3}
              dot={false}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}
