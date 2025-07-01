import React from 'react'
import Ping from '@/components/Ping'
import {client} from '@/sanity/lib/client' // Make sure this path is correct
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries' // Make sure this path is correct

const View = async ({id} : {id: string}) => {
    // Fetch the views from the server
    const data = await client
        .withConfig({useCdn: false})
        .fetch(STARTUP_VIEWS_QUERY, { id });
    const totalViews = data?.views ?? 0;

    return (
        <div className="view-container">
            <div className="absolute -top-2 -right-2">
                <Ping />
            </div>
            <p className="view-text">
                <span className="font-black">{totalViews} Views</span>
            </p>
        </div>
    );
}

export default View