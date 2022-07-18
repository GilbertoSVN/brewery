import { Box } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Header from '../components/Header'

function Brewery() {
  return (
    <Layout>
      <Box w='100%'>
        <Header />
        <Box backgroundColor='whiteAlpha.900' h='95%' paddingY={8} paddingX={16}></Box>
      </Box>
    </Layout>
  )
}

export default Brewery
