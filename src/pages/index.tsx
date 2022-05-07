import { Layout } from '@/components'
import type { NextPage } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsThreeDots } from 'react-icons/bs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
);

const Home: NextPage = () => {
  return (
    <Layout title="Testing">
      <div className="flex flex-col gap-y-16 lg:gap-y-8">
        <div className="flex flex-col gap-y-8 md:flex-row md:items-center gap-x-8">
          <motion.div
            initial={{ opacity: 0, translateY: 40 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="basis-full bg-white rounded-lg px-4 py-7 flex flex-col gap-y-8 dark:border dark:border-[#4D4D4D] dark:bg-[#282C31]"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-xl dark:text-gray-50">Friends</span>
              <span>
                <BsThreeDots className="text-2xl text-gray-400" />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-600 dark:text-gray-300">271 people</span>
              <span className="flex items-center gap-x-2 text-lg font-medium text-gray-600 dark:text-gray-300">
                + 0,7%
                <AiOutlineArrowUp className="text-[#7F7FD5]" />
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 40 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="basis-full bg-white rounded-lg px-4 py-7 flex flex-col gap-y-8 dark:border dark:border-[#4D4D4D] dark:bg-[#282C31]"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-xl dark:text-gray-50">Unique visitors</span>
              <span>
                <BsThreeDots className="text-xl dark:text-gray-300" />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-600 dark:text-gray-300">69 people</span>
              <span className="flex items-center gap-x-2 text-lg font-medium text-gray-600 dark:text-gray-300">
                - 1,7%
                <AiOutlineArrowDown className="text-[#E786D7]" />
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 40 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="basis-full bg-white rounded-lg px-4 py-7 flex flex-col gap-y-8 dark:border dark:border-[#4D4D4D] dark:bg-[#282C31]"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-xl dark:text-gray-50">Followers</span>
              <span>
                <BsThreeDots className="text-xl dark:text-gray-300" />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-600 dark:text-gray-300">288 people</span>
              <span className="flex items-center gap-x-2 text-lg font-medium text-gray-600 dark:text-gray-300">
                + 1%
                <AiOutlineArrowUp className="text-[#7F7FD5]" />
              </span>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-y-8 gap-x-8 md:flex-row">
          <motion.div
            initial={{ opacity: 0, translateY: 40 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full rounded-lg py-4 md:w-[70%] bg-white px-8 dark:bg-[#282C31] dark:border dark:border-[#4D4D4D]"
          >
            <span className="text-2xl font-medium dark:text-gray-50">Audience reach</span>
            <div className="w-full mt-4">
              <Line className="w-full" data={{
                  labels: ['Testing 1', 'Testing 2', 'Test 0', 'Test 10', 'Test 11', 'Test 12', 'Test 13', 'Test 14'],
                  datasets: [{
                    label: 'My First Dataset',
                    data: [0, 3, 8, 0, 10, 11, 12, 20],
                    fill: false,
                    borderColor: '#7F7FD5',
                    tension: 0.1,
                  }]
              }} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 40 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full rounded-lg px-7 py-4 bg-white md:w-[30%] dark:bg-[#282C31] dark:border dark:border-[#4D4D4D]">
            <span className="text-xl font-medium dark:text-gray-50">Reach by device</span>
            <div className="mt-10 w-full">
              <Pie data={{ labels: ['Test', 'Test 2'], datasets: [
                {
                  label: 'My First Dataset',
                  data: [10, 80],
                  backgroundColor: [
                    '#E786D7',
                    '#7F7FD5',
                  ],
                }
              ] }} />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-x-8 gap-y-6 md:flex-row">
          <motion.div
            initial={{ opacity: 0, translateY: 40 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full py-6 rounded-lg md:w-[60%] bg-white px-6 dark:bg-[#282C31] dark:border dark:border-[#4D4D4D]">
            <span className="text-2xl font-medium dark:text-gray-50">Gender / Age</span>
          <Bar options={{
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
}} data={{
              labels: ['Jan', 'Test', 'Test 2', 'Test 4', 'Test 5, Test 8'],
              datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                  '#7F7FD5',
                  '#E786D7',
                ],              }]
          }} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 40 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="py-6 px-8 rounded-lg flex-1 bg-white dark:bg-[#282C31] dark:border dark:border-[#4D4D4D]">
            <span className="text-2xl font-medium dark:text-gray-50">Geo</span>
            <div className="flex flex-col gap-y-8 mt-10">

              <div className="flex items-center gap-x-10">
                <div className="basis-full">
                  <div>
                    <div className="flex justify-between dark:text-gray-50 mb-2">
                      <span>Russia</span>
                      <span>94%</span>
                    </div>
                    <div className="bg-[#4D4D4D] rounded-full">
                      <motion.div transition={{ duration: 0.5 }} className="py-2 rounded-full bg-[#7F7FD5] w-0" whileInView={{ width: '100%' }}></motion.div>
                    </div>
                  </div>
                </div>

                <div className="basis-full">
                  <div>
                    <div className="flex justify-between dark:text-gray-50 mb-2">
                      <span>China</span>
                      <span>94%</span>
                    </div>
                    <div className="bg-[#4D4D4D] rounded-full">
                      <motion.div transition={{ duration: 0.5 }} className="py-2 rounded-full bg-[#7F7FD5] w-0" whileInView={{ width: '40%' }}></motion.div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-x-10">
                <div className="basis-full">
                  <div>
                    <div className="flex justify-between dark:text-gray-50 mb-2">
                      <span>Ukraine</span>
                      <span>94%</span>
                    </div>
                    <div className="bg-[#4D4D4D] rounded-full">
                      <motion.div transition={{ duration: 0.5 }} className="py-2 rounded-full bg-[#7F7FD5] w-0" whileInView={{ width: '20%' }}></motion.div>
                    </div>
                  </div>
                </div>

                <div className="basis-full">
                  <div>
                    <div className="flex justify-between dark:text-gray-50 mb-2">
                      <span>USA</span>
                      <span>94%</span>
                    </div>
                    <div className="bg-[#4D4D4D] rounded-full">
                       <motion.div transition={{ duration: 0.5 }} className="py-2 rounded-full bg-[#7F7FD5] w-0" whileInView={{ width: '70%' }}></motion.div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-x-10">
                <div className="basis-full">
                  <div>
                    <div className="flex justify-between dark:text-gray-50 mb-2">
                      <span>Mongolia</span>
                      <span>94%</span>
                    </div>
                    <div className="bg-[#4D4D4D] rounded-full">
                      <motion.div transition={{ duration: 0.5 }} className="py-2 rounded-full bg-[#7F7FD5] w-0" whileInView={{ width: '10%' }}></motion.div>
                    </div>
                  </div>
                </div>

                <div className="basis-full">
                  <div>
                    <div className="flex justify-between dark:text-gray-50 mb-2">
                      <span>Other</span>
                      <span>94%</span>
                    </div>
                    <div className="bg-[#4D4D4D] rounded-full">
                     <motion.div transition={{ duration: 0.5 }} className="py-2 rounded-full bg-[#7F7FD5] w-0" whileInView={{ width: '35%' }}></motion.div>
                    </div>
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
