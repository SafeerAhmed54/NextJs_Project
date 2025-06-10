import React from 'react'

export const experimental_ppr = true;

const page = async ({params} : {params: Promise<{id: string}>}) => {
    const id = (await params).id
  return (
    <div>
        <h1>This is the Startup Number {id}</h1>
    </div>
  )
}

export default page