'use client'

import React from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CardComponent from "@/components/ui/CardComponent";
import fetchDataAction from "@/actions";
import { useRouter } from 'next/navigation';



export default function Search() {
   const router = useRouter()
    
    const [user, setUser] = useState(null)

    const [username, setUserName] = useState("")

    async function handleAddAction(username){
        const user = await fetchDataAction(`https://api.github.com/users/${username}`)

        setUser(user)
        router.push(`/${user.login}`)
        
      
      
      }
      

  return (
    <div className="flex flex-col gap-3">
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input 
                className="bg-white min-w-96"
                placeholder="Enter github username"
                
                value={username}
                onChange={
                    (event)=>{
                    setUserName(event.target.value)
                    }
                }
                
                
                />
                <Button type="submit"
                onClick={()=>handleAddAction(username)}
                
                >Search</Button>
                </div>
      
    </div>



 
  )
}
