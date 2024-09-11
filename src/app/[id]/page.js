import fetchDataAction from '@/actions'
import PortfolioCard from '@/components/PortfolioCard'
import React from 'react'

async function PortfolioPage({params:{id}}) {
    const user = await fetchDataAction(`https://api.github.com/users/${id}`)

  return (
    <div className='dotted-background bg-blue-500 flex items-center justify-center' style={{ height: '100vh', width: '100%' }}>
        <PortfolioCard
        user={user}
        
        >

        </PortfolioCard>
    </div>
  )
}

export default PortfolioPage