import fetchDataAction, { fetchIssues, fetchPRs, fetchStar, fetchWatchers } from '@/actions'
import fetchSocialAction from '@/actions'
import PortfolioCard from '@/components/PortfolioCard'
import React from 'react'

async function PortfolioPage({params:{id}}) {
    const user = await fetchDataAction(`https://api.github.com/users/${id}`)

    const social = await fetchDataAction(`https://api.github.com/users/${id}/social_accounts`)

    const pr = await fetchDataAction(`https://api.github.com/search/issues?q=author:${id}+type:pr`)

    const issues = await fetchDataAction(`https://api.github.com/search/issues?q=author:${id}+type:issue`)

    const stars = await fetchStar(`https://api.github.com/users/${id}/repos`)

    const watchers = await fetchWatchers(`https://api.github.com/users/${id}/repos`)


  return (
    <div className=' bg-black flex items-center justify-center w-full h-full'>
        <PortfolioCard
        user={user}
        social={social}
        pr={pr}
        issues={issues}
        stars={stars}
        watchers={watchers}
        
        >

        </PortfolioCard>
    </div>
  )
}

export default PortfolioPage