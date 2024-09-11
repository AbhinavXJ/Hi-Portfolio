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
const CardComponent = (user) => {
    const createdAt = '2023-05-31T19:29:38Z';
const date = new Date(createdAt).toISOString().split('T')[0];
    console.log(user)
    return (

    <div className=' min-h-full mb-5'>


        <div className='flex justify-between'>
        <Card className="rounded-full overflow-hidden">
                    <Image className=''
                        src={user.user.avatar_url}
                        width={200}
                        height={200}
                        alt="wow"
                    >

                    </Image>
        </Card>


        <Card className="">
                <CardTitle className="mx-5 my-5">Contribution Graph</CardTitle>
                <CardContent className="flex items-center overflow-hidden mt-5">
                    <Image
                        className=' w-[100%] h-auto'
                        src={`https://ghchart.rshah.org/${user.user.login}`}
                        height={0}
                        width={0}

                        alt='your contributions'
                
                    ></Image>   
                </CardContent>      

               
        </Card>


        </div>

        <div className='flex justify-between mt-5'>
                <Card className="mx-5">
                        <CardHeader>
                            <CardTitle>Personal Info</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Name: {user.user.name}
                            
                        </CardContent>
                        <CardContent className="">
                            Bio: {user.user.bio}
                        </CardContent>
                                 


                        <CardContent>
                                email: {user.user.email}
                        </CardContent>
                        <CardContent>

                        <Button className="bg-slate-300 p-5 mx-5">
                            <a href={user.user.html_url} target='_blank'>
                            <Image
                            src={"/assets/github-mark.png"}
                            height={50}
                            width={50}
                            alt='github'
                            
                            >

                            </Image>
                                
                                
                            </a> 
                        </Button>
                        <Button className="bg-slate-300 p-5">
                            <a href={`https://x.com/${user.user.twitter_username}`} target='_blank'>
                            <Image
                            src={"/assets/logo-black.png"}
                            height={40}
                            width={40}
                            alt='twitter'
                            
                            >

                            </Image>
                                
                                
                            </a> 
                        </Button>


                        </CardContent>
                       
                </Card>

            <Card>
            <CardHeader>
                <CardTitle>Account info</CardTitle>
            </CardHeader>
            <CardContent>
                    number of public repos: {user.user.public_repos}
            </CardContent>
            <CardContent>
            <Button className="bg-slate-800 p-5 ">
                    <a href={user.user.repos_url} target='_blank'>public repos</a>
            </Button>          
            </CardContent>
            <CardContent>
            followers: {user.user.followers}         
            </CardContent>
            <CardContent>
            <Button className="bg-slate-800 p-5 ">
                    <a href={user.user.followers_url} target='_blank'>check followers</a>
            </Button>          
            </CardContent>
           
            </Card>

            <Card className="mx-4"> 
            <CardHeader>
                <CardTitle>Account info</CardTitle>
            </CardHeader>
            <CardContent>
                    Account created at: {date}
            </CardContent>
            <CardContent>
                    Private repos: {user.user.total_private_repos}
            </CardContent>
            
       
            <CardContent>
                    location: {user.user.location}
            </CardContent>
            <CardContent>
                    hireable: {user.user.hireable}
            </CardContent>
            
          
           
            </Card>


        </div>

        
    
    
    
    
    </div>
    )
}
export default CardComponent