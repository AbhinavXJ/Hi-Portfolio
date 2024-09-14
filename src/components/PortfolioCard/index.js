'use client'

import React from 'react'

import CardComponent from "@/components/ui/CardComponent";




export default function PortfolioCard({user,social,pr,issues,stars,watchers}) {
// console.log(stars)
  return (
    <div className=" min-h-screen w-[80%] flex items-center "
    
    >
          
      
         {user && <CardComponent user={user} social={social} pr={pr} issues={issues} stars={stars} watchers={watchers}></CardComponent>}
    </div>



 
  )
}

