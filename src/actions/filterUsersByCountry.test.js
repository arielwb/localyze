import { filterUsersByCountry } from '../actions/filterUsersByCountry'

describe('filterUsersByCountry', () => {
  it('should filter the users by the given country', () => {
    const setStateSpy = jest.fn()
    const users = [
      { name: 'Maddy', country: 'Brazil' },
      { name: 'Rue', country: 'France' },
      { name: 'Jules', country: 'France' }
    ]

    filterUsersByCountry(setStateSpy, users, 'brazil')

    expect(setStateSpy).toHaveBeenCalledWith([{ name: 'Maddy', country: 'Brazil' }])
  })

  it('should return all the users that match the given country', () => {
    const setStateSpy = jest.fn()
    const users = [
      { name: 'Maddy', country: 'Brazil' },
      { name: 'Rue', country: 'France' },
      { name: 'Jules', country: 'France' }
    ]

    const expectedUsers = [
      { name: 'Rue', country: 'France' },
      { name: 'Jules', country: 'France' }
    ]

    filterUsersByCountry(setStateSpy, users, 'france')

    expect(setStateSpy).toHaveBeenCalledWith(expectedUsers)
  })

  it('should match partial country names', () => {
    const setStateSpy = jest.fn()
    const users = [
      { name: 'Maddy', country: 'Brazil' },
      { name: 'Rue', country: 'France' },
      { name: 'Jules', country: 'France' }
    ]

    filterUsersByCountry(setStateSpy, users, 'br')

    expect(setStateSpy).toHaveBeenCalledWith([{ name: 'Maddy', country: 'Brazil' }])
  })

  it('should return an empty array if there are no matches', () => {
    const setStateSpy = jest.fn()
    const users = [
      { name: 'Maddy', country: 'Brazil' },
      { name: 'Rue', country: 'France' },
      { name: 'Jules', country: 'France' }
    ]

    filterUsersByCountry(setStateSpy, users, 'germany')

    expect(setStateSpy).toHaveBeenCalledWith([])
  })

  it('should return all the users if the filter is empty', () => {
    const setStateSpy = jest.fn()
    const users = [
      { name: 'Maddy', country: 'Brazil' },
      { name: 'Rue', country: 'France' },
      { name: 'Jules', country: 'France' }
    ]

    filterUsersByCountry(setStateSpy, users)

    expect(setStateSpy).toHaveBeenCalledWith(users)
  })
})
