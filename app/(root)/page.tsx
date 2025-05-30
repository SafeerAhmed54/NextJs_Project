import React from 'react'
import SearchForm from '../Components/SearchForm'

const page = async ({searchParams}: {searchParams: Promise<{query?: string}>}) => {
  const query = (await searchParams).query
  return (
    <>
    <section className='pink_container'>
      <h1 className='heading'>Pitch Your Startup,<br /> Connect with Entrepreneurs</h1>
      <p className='sub-heading !max-w-3xl'>
        Join a community of startup founders and investors to get feedback,
        connect with potential customers, and grow your business.
      </p>
      <SearchForm query={query}/>
    </section>
    
    </>
  )
}

export default page