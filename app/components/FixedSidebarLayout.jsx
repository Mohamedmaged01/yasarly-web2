'use client'
// components/FixedSidebarLayout.js
import { GoHome } from "react-icons/go";
import { TbWorldSearch } from "react-icons/tb";
import { LuPlaySquare } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function FixedSidebarLayout({ children }) {
  const router = useRouter()
  const pathname = usePathname()


  const linksData = [
    {
      icon: <GoHome className={` w-[20px] h-[20px] `} />,
      title: "Home",
      href: "/",
    },
    {
      icon: <TbWorldSearch className='  w-[20px] h-[20px]' />,
      title: "Explore",
      href: "/explore",
    },
    {
      icon: <LuPlaySquare className='  w-[20px] h-[20px]' />,
      title: "myCourses",
      href: "/myCourses",
    },
    {
      icon: <BsChatLeftText className='  w-[20px] h-[20px]' />,
      title: "Chat",
      href: "/chat",
    },
    // {
    //     icon: <IoMdNotificationsOutline className='  w-[20px] h-[20px]' />,
    //     title: "Notifications",
    //     href: "/#",
    // },
    {
      icon: <MdOutlineSettings className='  w-[20px] h-[20px]' />,
      title: "Settings",
      href: "/settings",
    },

  ]

  return (
    <div className="flex min-h-screen overflow-hidden rounded-lg">
      <div className='flex min-h-screen'>
        <div className='w-[50px]   bg-white shadow-md  flex flex-col gap-3 items-center'>
          <div className="mt-[30px] w-[30px] h-[45px] bg-[#DFFAFF] flex items-center justify-center">
            <img src="/Union.png" className="w-[25px] h-[25px]" />
          </div>
          <div>
            {
              linksData.map((link) => (
                <Link href={link.href} key={link.href} className=" flex flex-col gap-[50px] mb-[20px] mt-[20px]">
                  <div className={`${pathname === link.href ? "flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#ECFEFF]" : ""}`}>
                    <span className={`${pathname === link.href ? "text-[#09C1E0]" : ""}`}>
                      {link.icon}
                    </span>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>


      <main className=" w-full ">
        {children}
      </main>
    </div>
  );
}


