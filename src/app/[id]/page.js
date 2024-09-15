"use client"

import fetchDataAction, { fetchIssues, fetchPRs, fetchStar, fetchWatchers } from '@/actions'
import fetchSocialAction from '@/actions'
import PortfolioCard from '@/components/PortfolioCard'
import React, { Suspense, useEffect } from 'react'
import { useState } from 'react'
import Loading from '../loading'

function PortfolioPage({params:{id}}) {
  
  const [loading,setLoading] = useState(true)
  const [user, setUser] = useState(null);
  const [social, setSocial] = useState(null);
  const [pr, setPR] = useState(null);
  const [issues, setIssues] = useState(null);
  const [stars, setStars] = useState(null);
  const [watchers, setWatchers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchDataAction(`https://api.github.com/users/${id}`);
        const socialData = await fetchDataAction(`https://api.github.com/users/${id}/social_accounts`);
        const prData =  await fetchDataAction(`https://api.github.com/search/issues?q=author:${id}+type:pr`);
        const issuesData = await fetchDataAction(`https://api.github.com/search/issues?q=author:${id}+type:issue`);
        const starsData = await fetchStar(`https://api.github.com/users/${id}/repos`);
        const watchersData = await fetchWatchers(`https://api.github.com/users/${id}/repos`);
        setLoading(false)
        setUser(userData);
        setSocial(socialData);
        setPR(prData);
        setIssues(issuesData);
        setStars(starsData);
        setWatchers(watchersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  


    // useEffect(()=>{
      
    //   const user = fetchDataAction(`https://api.github.com/users/${id}`)

    //   const social = fetchDataAction(`https://api.github.com/users/${id}/social_accounts`)
  
    //   const pr = fetchDataAction(`https://api.github.com/search/issues?q=author:${id}+type:pr`)
  
    //   const issues =fetchDataAction(`https://api.github.com/search/issues?q=author:${id}+type:issue`)
  
    //   const stars = fetchStar(`https://api.github.com/users/${id}/repos`)
  
    //   const watchers = fetchWatchers(`https://api.github.com/users/${id}/repos`)

    // },[id]

    // )

   


  return (
    <div className=' bg-black flex items-center justify-center w-full h-full'>
        
        {
          loading?
          <Loading className=""></Loading>
          :
            <PortfolioCard
            user={user}
            social={social}
            pr={pr}
            issues={issues}
            stars={stars}
            watchers={watchers}
            
            >
    
            </PortfolioCard>
          
        }
       
    </div>
  )
}

export default PortfolioPage