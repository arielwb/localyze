import React from 'react'
import { ChallengeOne } from './sections/ChallengeOne'
import { ChallengeTwo } from './sections/ChallengeTwo'
import { ChallengeThree } from './sections/ChallengeThree'
import { ChallengeFour } from './sections/ChallengeFour'
import { ChallengeFive } from './sections/ChallengeFive'

export const App = () => {
  return (
    <div className='main'>
      <ChallengeOne />
      <ChallengeTwo />
      <ChallengeThree />
      <ChallengeFour />
      <ChallengeFive />
    </div>
  )
}
