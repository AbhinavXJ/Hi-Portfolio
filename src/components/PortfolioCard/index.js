'use client'

import React from 'react'

import CardComponent from "@/components/ui/CardComponent";




export default function PortfolioCard(user) {

  return (
    <div className=" h-[80%] w-[70%]"
    
    >
          
      
         {user && <CardComponent user={user.user}></CardComponent>}
    </div>



 
  )
}

