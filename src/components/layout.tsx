import Head from 'next/head'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { IoMdArrowDropleft, IoMdArrowDropright, IoMdSearch, IoMdSettings, IoMdPaper } from 'react-icons/io'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineHome } from 'react-icons/ai'
import { BsFillBarChartLineFill, BsFillPlayFill } from 'react-icons/bs'

interface LayoutProps {
  title?: string
  children: React.ReactNode
}

const SideBar = ({ expanded, setExpanded }): JSX.Element => {
  return (
    <motion.div
      variants={{
        open: {
          width: '8%'
        },
        closed: {
          width: '0%'
        }
      }}
      animate={expanded ? 'open' : 'closed'}
      className="fixed top-0 left-0 h-full shadow w-[8%] bg-white flex flex-col py-8 justify-between items-center dark:bg-[#282C31] dark:border-r dark:border-[#4D4D4D]">
      {expanded && (
        <>
          <div>
            <motion.img src="/logo.svg" alt="" transition={{ duration: 0.5 }} initial={{ opacity: 0, translateY: -20 }} animate={{ opacity: 1, translateY: 0 }} />
          </div>
          <ul className="flex flex-col gap-y-8 dark:text-white">
            <motion.li className="transition-all duration-400 hover:text-[#7F7FD5] cursor-pointer" transition={{ duration: 0.5 }} initial={{ opacity: 0, translateX: -20 }} animate={{ opacity: 1, translateX: 0 }}>
              <AiOutlineHome className="text-3xl" />
            </motion.li>
            <motion.li className="transition-all duration-400 hover:text-[#7F7FD5] cursor-pointer" transition={{ duration: 0.5 }} initial={{ opacity: 0, translateX: 20 }} animate={{ opacity: 1, translateX: 0 }}>
              <IoMdPaper className="text-3xl" />
            </motion.li>
            <motion.li className="transition-all duration-400 hover:text-[#7F7FD5] cursor-pointer" transition={{ duration: 0.5 }} initial={{ opacity: 0, translateX: -20 }} animate={{ opacity: 1, translateX: 0 }}>
              <HiOutlineMail className="text-3xl" />
            </motion.li>
            <motion.li className="transition-all duration-400 hover:text-[#7F7FD5] cursor-pointer" transition={{ duration: 0.5 }} initial={{ opacity: 0, translateX: 20 }} animate={{ opacity: 1, translateX: 0 }}>
              <BsFillPlayFill className="text-3xl" />
            </motion.li>
            <motion.li className="transition-all duration-400 hover:text-[#7F7FD5] cursor-pointer" transition={{ duration: 0.5 }} initial={{ opacity: 0, translateX: -20 }} animate={{ opacity: 1, translateX: 0 }}>
              <BsFillBarChartLineFill className="text-3xl text-[#7F7FD5]" />
            </motion.li>
            <motion.li className="transition-all duration-400 hover:text-[#7F7FD5] cursor-pointer" transition={{ duration: 0.5 }} initial={{ opacity: 0, translateX: 20 }} animate={{ opacity: 1, translateX: 0 }}>
              <IoMdSettings className="text-3xl" />
            </motion.li>
          </ul>
          <div></div>
        </>
      )}

      <button className={`absolute ${expanded ? '-right-5' : '-right-8'} top-1/2 bg-white rounded-full p-2`} onClick={() => setExpanded(!expanded)}>
        {expanded ? <IoMdArrowDropleft className="text-2xl" /> : <IoMdArrowDropright className="text-2xl" />}
      </button>
    </motion.div>
  )
}

export default function Layout({ title, children }: LayoutProps): JSX.Element {
  const [expanded, setExpanded] = useState<boolean>(true)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideBar expanded={expanded} setExpanded={setExpanded} />

      <motion.main
        className="bg-[#EFF3F9] min-h-screen py-8 dark:bg-[#212427]"
      >
        <motion.div 
          animate={expanded ? 'open' : 'closed'}
          initial={{ marginLeft: '8%' }}
          variants={{
            open: {
              marginLeft: '8%'
            },
            closed: {
              marginLeft: '0%'
            }
          }}
        >
          <div className="custom-container">
            <header className="mb-10">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-8">
                  <h1 className="font-medium text-3xl text-gray-800 dark:text-gray-50">Statistics</h1>
                  <div>
                    <div className="flex items-center gap-x-3 px-2 py-1 rounded-full bg-white dark:border dark:border-[#4C4C4C] dark:bg-[#212427]">
                      <IoMdSearch className="text-2xl text-gray-500" />
                      <input type="text" className="w-full border-none outline-none bg-transparent dark:text-gray-50" placeholder="Search" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-3">
                  <span className="text-lg font-medium dark:text-gray-50">Anya</span>
                  <div className="w-12 h-12 bg-gray-100 p-2 rounded-full">
                    <img className="w-full h-full rounded-full" src="https://s3-alpha-sig.figma.com/img/dc49/7145/09b4caab287a2f9b95064622e239aa3f?Expires=1652659200&Signature=KPL35bkURhoLgP-pC4~VTYTm-MOTA6lv4soQLGnyfFgIK7CNn1uYCGQSmWYwCHmkLsodQTtAX1-Jx-SjGCd0RI4HsW2UZU2hDGN5dcfFIxUHb4NAi0Nax2UXLFjEG53dL0B2u6SjP51h4SKYZdoaupW~rKU0PlZGTPZSWPr0lkLPyxiqEZ8cTre6vDlCzao5OGgnLi-XikuiqLazynLcmWSN6-cI5P9UeUgoppxl72izcU0uWTFKr-nYdtU4b0ewBW07h~NmlnR~YaWW3usqfiwKP0FNFntgzqK1BTqX~wj8B1PWDHmqpv4f8dqj8MTjV19FhbRtZ3-YtkvIXKkffQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                  </div>
                </div>
              </div>
            </header>
            <div>
              {children}
            </div>

          </div>
        </motion.div>
      </motion.main>
    </>
  )
}