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
const CardComponent = (user) => {
    console.log(user.user.login)
    return (
        <Card className="bg-zinc-900">
            <CardHeader>
                <CardTitle>{user.login}</CardTitle>
                <CardDescription>

                    <Image
                        src={user.user.avatar_url}
                        width={200}
                        height={200}
                        alt="wow"
                    >

                    </Image>
                </CardDescription>
            </CardHeader>


            <CardContent className="text-2xl text-cyan-600">Bio: {user.user.bio}</CardContent>
            <CardContent className="text-2xl text-purple-500">Name: {user.user.name}</CardContent>

            <CardContent className="text-2xl text-orange-400">Public repos: {user.user.public_repos}</CardContent>

            <Image
            className='px-5'
            src={`https://ghchart.rshah.org/${user.user.login}`}
            height={0}
            width={0}
            style={{ width: '100%', height: 'auto' }} // optional

            alt='your contributions'
            
            ></Image>


            <CardFooter>
            </CardFooter>
        </Card>

    )
}
export default CardComponent