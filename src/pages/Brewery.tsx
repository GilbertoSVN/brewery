import { useCallback, useEffect, useMemo, useState } from 'react'
import { Box, Flex, Grid, Spinner } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import BreweryResponse from '../interfaces/BreweryResponse'
import BreweryType from '../types/Brewery'
import Card from '../components/Card'

function Brewery() {
  const [breweries, setBreweries] = useState<BreweryResponse[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  function processData<T>(data: BreweryResponse[]): T[] {
    const processedData: T[] = []

    data.forEach((brewery) => {
      const processed = {
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
      processedData.push(processed as T)
    })

    return processedData
  }

  useEffect(() => {
    fetch('https://api.openbrewerydb.org/breweries')
      .then((response) => response.json())
      .then((breweries: BreweryResponse[]) => {
        setBreweries(breweries)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const deleteBrewery = (index: number) => {
    setBreweries((prevBreweries) => {
      const editedBreweries = [...(prevBreweries || [])]
      editedBreweries?.splice(index, 1)

      return editedBreweries
    })
  }

  const breweriesList: BreweryType[] = useMemo(() => {
    console.log('updated')
    return processData(breweries || [])
  }, [breweries])

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
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
              {breweriesList?.map((brewery, index) => (
                <Card key={brewery.id} index={index} brewery={brewery} onDelete={deleteBrewery} />
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Layout>
  )
}

export default Brewery
