import React from 'react'
import { BarController, LinearScale, LineController, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip } from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js'

type Props = {
  datos: any[]
  etiquetas: any[]
  title: string
  titleX?: string
  titleY?: string
  titleChart?: string
}
const Grafico3 = ({ datos, etiquetas, title, titleY, titleX, titleChart }: Props) => {
  ChartJS.register(LinearScale, BarController, LineController, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip)
  const labels = etiquetas
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: datos,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(201, 203, 207, 1)',
        ],
        borderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
        borderWidth: 2,
      },
    ],
  }
  return (
    <div className="w-full flex-col h-full items-center flex justify-center bg-gray-700">
      <h2>{titleChart}</h2>
      <Line
        options={{
          plugins: {
            title: {
              display: true,
              text: titleChart,
            },
            legend: {
              labels: {
                color: '#fff',
              },
            },
            tooltip: {
              backgroundColor: '#374151',
              titleColor: '#fff',
              borderColor: '#fff',
              borderWidth: 1,
            },
          },
          scales: {
            y: {
              title: {
                display: true,
                text: titleY,
                color: '#fff',
              },
              ticks: {
                color: '#fff',
              },
            },
            x: {
              title: {
                display: true,
                text: titleX,
                color: '#fff',
              },
              ticks: {
                color: '#fff',
              },
            },
          },
        }}
        data={data}
        color="#fff"
      />
    </div>
  )
}

export default Grafico3
