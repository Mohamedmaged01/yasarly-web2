'use client'
import React from 'react'
import FixedSidebarLayout from '@/app/components/FixedSidebarLayout'
import ChatView from '@/sections/chat/chatView'

const page = () => {
  return (
    <FixedSidebarLayout>
        <ChatView/>
    </FixedSidebarLayout>
  )
}

export default page