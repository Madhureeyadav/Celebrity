import React from 'react'
// import Card from '../components/CelebrityCard'
import CelebrityCard from '../components/CelebrityCard'
const Celebrity = ({cardData}) => {
  return (
    <div>
        {/* <Card /> */}
        <CelebrityCard cardData={cardData} />
    </div>
  )
}

export default Celebrity