import React from 'react'
import { ChallengeOne } from './challenges/ChallengeOne'
import { ChallengeTwo } from './challenges/ChallengeTwo'
import { ChallengeThree } from './challenges/ChallengeThree'
import { ChallengeFour } from './challenges/ChallengeFour'
import { ChallengeFive } from './challenges/ChallengeFive'

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
