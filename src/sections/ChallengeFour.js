import React, { useState } from 'react'
import { Header, Input, OutputBox } from '../components'
import { filterUsersByCountry, sampleUsers } from '../actions/filterUsersByCountry'

const buildUserList = (user, index) => (
  <li key={`${user.name}-${index}`}>
    <span>{user.name}</span>
    <span>{user.country}</span>
  </li>
)

export const ChallengeFour = () => {
  const [userList, setUsers] = useState(sampleUsers)

  return (
    <>
      <Header id={4}>
        Code a list of users with countries `type User = name: string; country: string` in React.js.
        You should be able to filter users from a specific country.
        What questions you would ask your product manager if you received this task?
      </Header>
      <Input
        type='search'
        name='challenge4'
        label='Filter by country'
        onChange={(event) => filterUsersByCountry(setUsers, event.target.value)}
      />
      <ul className='user-list'>{userList.map(buildUserList)}</ul>
      <OutputBox>
        <h2>Questions:</h2>
        <ul>
          <li>
            Where do I get the user data from? What is the url of service/api?
          </li>
          <li>
            Should we implement completion/suggestions of country names?
            Or maybe a dropdown of available countries?
          </li>
          <li>
            What will the user do with this information?
            Should we offer a friendly way to download/export the filtered data?
          </li>
          <li>
            Will this feature grow? Will this list have other actions like edit, delete?
          </li>
          <li>
            Do we have any guidelines on how the design should look like?
          </li>
        </ul>
      </OutputBox>
    </>
  )
}
