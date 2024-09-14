"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";



export default async function fetchDataAction(url){
  const token = process.env.NEXT_PUBLIC_GITHUB_PAT;
 

    try{

        const result = await fetch(url, {
          headers: {
              'Authorization': `token ${token}`
          }
      });
        const data = await result.json()
        const data_send = JSON.parse(JSON.stringify(data))
        // revalidatePath('/')
        return data_send
    
   


    }catch(e){
        console.log(e)

    }


}


export async function fetchStar(url){
  const token = process.env.NEXT_PUBLIC_GITHUB_PAT;
 

    try{

        const result = await fetch(url, {
          headers: {
              'Authorization': `token ${token}`
          }
        });
        const data = await result.json()
        const data_send = JSON.parse(JSON.stringify(data))
        const total_count = data_send.reduce((sum,repo)=>sum+repo.stargazers_count,0)
        // revalidatePath('/')
        return total_count
    
   


    }catch(e){
        console.log(e)

    }


}

export async function fetchWatchers(url){
  const token = process.env.NEXT_PUBLIC_GITHUB_PAT;
 

    try{

        const result = await fetch(url, {
          headers: {
              'Authorization': `token ${token}`
          }
        });
        const data = await result.json()
        const data_send = JSON.parse(JSON.stringify(data))
        const total_count = data_send.reduce((sum,repo)=>sum+repo.watchers_count,0)
        // revalidatePath('/')
        return total_count
    
   


    }catch(e){
        console.log(e)

    }


}

