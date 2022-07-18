import { useEffect, useState } from 'react'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Header from '../components/Header'

type Brewery = {
  id: string
  name: string
  street?: string
  city: string
  state: string
  country: string
  postalCode: string
  phone: string
  type: string
  custom: string
}

interface BreweryResponse {
  id: string
  name: string
  brewery_type?: string
  street?: null
  address_2?: null
  address_3?: null
  city?: string
  state?: string
  county_province?: null
  postal_code?: string
  country?: string
  longitude?: null
  latitude?: null
  phone?: string
  website_url?: string
  updated_at?: string
  created_at?: string
}

function Brewery() {
  const [breweries, setBreweries] = useState<Brewery[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('https://api.openbrewerydb.org/breweries')
      .then((response) => response.json())
      .then((breweries: BreweryResponse[]) => {
        const processedData: Brewery[] = []
        breweries.forEach((brewery) => {
          const data = {
            id: brewery.id,
            name: brewery.name,
            street: brewery.street || '',
            city: brewery.city || '',
            state: brewery.state || '',
            country: brewery.country || '',
            postalCode: brewery.postal_code || '',
            phone: brewery.phone || '',
            type: brewery.brewery_type || '',
            custom: '',
          }
          processedData.push(data)
        })
        setBreweries(processedData)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <Layout>
      <Box w='100%'>
        <Header />
        <Box backgroundColor='whiteAlpha.900' h='95%' paddingY={8} paddingX={16}>
          {isLoading ? (
            <Flex flexDir='column' h='100%' justifyContent='center' alignItems='center'>
              <Spinner size='xl' />
            </Flex>
          ) : (
            <Box></Box>
          )}
        </Box>
      </Box>
    </Layout>
  )
}

export default Brewery
