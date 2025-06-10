import React from "react";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "../../components/StartupCard";
//import { client } from '@/sanity/lib/client'
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  //const posts = await client.fetch(STARTUP_QUERY);

  const { data: posts } = await sanityFetch({ query: STARTUP_QUERY });

  console.log(JSON.stringify(posts), null, 2);

  // Uncomment the following lines to use static data for testing
  // Initial posts data can be used for testing purposes

  // const posts = [{
  //   _createdAt : new Date(),
  //   views: 55,
  //   author: {_id: 1 , name: 'Safeer Ahmad Rana'},
  //   _id: 1,
  //   description: 'This is a description',
  //   image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U1RBUlRVUHxlbnwwfHwwfHx8MA%3D%3D',
  //   category: 'Robots',
  //   title: "We Robots",},];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup,
          <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Join a community of startup founders and investors to get feedback,
          connect with potential customers, and grow your business.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startup Found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
};

export default page;
