import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Image from 'next/image'
import { Button } from '../button'
import { Label } from '../label'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'

const CardComponent = ({user,social,pr,issues,stars,watchers}) => {
    const [url, setUrl] = useState('');

    useEffect(() => {
      // This will run only on the client-side
      if (typeof window !== 'undefined') {
        setUrl(window.location.href); // Get the full URL
      }
    }, []);
    // console.log(stars)

    const createdAt = '2023-05-31T19:29:38Z';
        const date = new Date(createdAt).toISOString().split('T')[0];

    // console.log(user)
    return (

    <div className=' flex flex-col gap-4  lg:grid lg:grid-rows-[auto,1fr] lg:grid-cols-[1fr,3fr] lg:gap-x-4 lg:gap-y-3'>


        <div className=''>
        <Card className="bg-neutral-900 p-0  border-white border-opacity-5 border-[0.5px]">
                    <Image className='h-full w-full object-cover'
                        src={user.avatar_url}
                        width={300}
                        height={200}
                        alt="wow"
                    >

                    </Image>
        </Card>
        </div>
        
        <div className=''>
        <Card className="bg-neutral-900 border-white border-opacity-15 border-[0.5px]" >
                <CardContent className="flex items-center overflow-hidden mt-5">
                    <Image
                        className=' w-[100%] h-auto '
                        src={`https://ghchart.rshah.org/${user.login}`}
                        height={0}
                        width={0}

                        alt='your contributions'
                
                    ></Image>   
                </CardContent>      

               
        </Card>
        
        <div className='flex flex-col gap-4  lg:grid lg:grid-cols-3 lg:gap-x-4 lg:gap-y-2 mt-4 '>
                    
                    <Link href={`https://github.com/${user.login}?tab=repositories`} target='_blank' className='bg-neutral-900 border-white border-opacity-15 border-[0.5px] text-white text-center rounded-sm  py-1' >
                    Public Repos: {user.public_repos} 
                    </Link>

                    <div  className='bg-neutral-900 border-white border-opacity-15 border-[0.5px] text-white text-center rounded-sm py-1' >
                    Watchers Count: {watchers} 
                    </div>

                    <div  className='bg-neutral-900 border-white border-opacity-15 border-[0.5px] text-white text-center rounded-sm py-1' >
                    Total PRs(2024): {pr.total_count} 
                    </div>

                    <div  className='bg-neutral-900 border-white border-opacity-15 border-[0.5px] text-white text-center rounded-sm py-1' >
                    Total Issues : {issues.total_count} 
                    </div>

                    <div className='bg-neutral-900 border-white border-opacity-15 border-[0.5px] text-white text-center rounded-sm py-1'  >
                    Stargazers Count: {stars} 
                    </div>

                    <div className='bg-neutral-900 border-white border-opacity-15 border-[0.5px] text-white text-center rounded-sm p-1 flex justify-center' >
                    <button onClick={()=>navigator.clipboard.writeText(url)} className='flex'>
                        <p>Copy Link </p>
                        <Image
                        src={"/assets/link.png"}
                        height={30}
                        width={30}
                        alt='link'
                        
                        >

                        </Image>
                    </button>
                    </div>


                   
                    

                
                


               
                    
                   

                    
                  

                 

                


        </div>
        </div>

       

        <div className=' '>
                <Card className="h-full flex flex-col gap-4 justify-evenly bg-neutral-900  border-white border-opacity-15 border-[0.5px]">
                        
                            <Label className="text-3xl py-3 rounded-sm  mx-2  text-white flex items-center justify-center border-[0.5px] border-opacity-15 border-white">
                            {user.name}

                            </Label>

                            <Label className="text-xs py-3 px-2 rounded-sm mx-2 text-wrap text-center text-white flex items-center justify-center border-[0.5px] border-opacity-15 border-white">
                            {user.bio}

                            </Label>
                            
                       
                            <Button className="text-xl py-3 mx-2 rounded-sm text-wrap text-white border-[0.5px] border-opacity-15 border-white ">
                                Resume
                            </Button>

                         


                       
                       
                </Card>
                </div>
        
        
        <div className='flex flex-col gap-4 lg:grid lg:grid-cols-[1fr,1fr,1fr] lg:gap-4  '>
           <div className='bg-neutral-900 border-white border-opacity-15 border-[0.5px] px-4 '>    
                    <Card className="bg-neutral-900 flex flex-col  p-2 my-2 border-white border-opacity-15 border-[0.5px]">
                    <CardTitle className="text-white text-3xl">Contact</CardTitle>
                    <div>
                    <div className='text-white opacity-35'>email:</div>
                    <div className='text-white'>{user.email?user.email:"email@gmail.com"}</div>
                    </div>
                    </Card>

                    <div className='bg-neutral-900 my-4 rounded-sm flex gap-4 border-white border-opacity-15 border-[0.5px] mt-4 p-4'>
                    <Button className="bg-black py-0 px-1">
                        <a href={user.html_url} target='_blank' className=''>
                        <Image
                        src={"/assets/github.png"}
                        height={40}
                        width={40}
                        alt='github'
                        className='w-ful'
                        
                        >

                        </Image>
                            
                            
                        </a> 
                    </Button>
                    <Button className=" w-fit py-0 px-1 bg-black">
                        <a href={`https://x.com/${user.twitter_username}`} target='_blank'>
                        <Image
                        src={"/assets/x.png"}
                        height={40}
                        width={40}
                        alt='twitter'
                        
                        >

                        </Image>
                            
                            
                        </a> 
                    </Button>

                    {
                        social[2] && 
                        <Button className="py-0 px-1 bg-white">
                        <a href={social[2].url} target='_blank'>
                        <Image
                        src={"/assets/linkedin.png"}
                        height={40}
                        width={40}
                        alt='linkedin'
                        
                        >

                        </Image>
                            
                            
                        </a> 
                    </Button>



                    }

                  

                    </div>

           
           
                    </div>
            <Card className="flex flex-col bg-neutral-900 justify-between gap-4 p-4 text-white border-white border-opacity-15 border-[0.5px]">
                <div className='bg-neutral-900 text-center border-white border-opacity-15 border-[0.5px] p-2'>
                    contribution 
                </div>
                <div className='bg-neutral-900 text-center border-white border-opacity-15 border-[0.5px] p-2'>
                    Github followers: {user.followers}
                </div>
                <div className='bg-neutral-900 text-center border-white border-opacity-15 border-[0.5px] p-2'>
                    time zone
                </div>
            </Card>

            <Card className=" bg-neutral-900 text-white border-white border-opacity-15 border-[0.5px] flex justify-center"> 
            <div className='text-center '>
                Map
                </div>
            
          
           
            </Card>

            
        </div>
        </div>
    
    
    
    
    )
}
export default CardComponent