import React from 'react'
import Landing from '../componets/Landing'
import Highlights from '../componets/Highlights'
import Featured from '../componets/Features'
import Discounted from '../componets/Discounted'
import Explore from '../componets/Explore'

const Home = () => {
    return(
        <>
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
        </>
    )
}

export default Home