export const sampleUsers = [
  { name: 'Maddy', country: 'Brazil' },
  { name: 'Nate', country: 'Netherlands' },
  { name: 'Cassie', country: 'Germany' },
  { name: 'Fezco', country: 'Norway' },
  { name: 'Rue', country: 'France' },
  { name: 'Jules', country: 'France' },
  { name: 'Elliot', country: 'Poland' },
  { name: 'Lexi', country: 'Poland' }
]

export const filterUsersByCountry = (setState, users, countryFilter) => {
  if (!countryFilter) {
    setState(users)
  } else {
    const filteredCountries = users.filter((user) => {
      const country = user.country.toLowerCase()
      const filter = countryFilter.toLowerCase()

      return country.includes(filter)
    })

    setState(filteredCountries)
  }
}
