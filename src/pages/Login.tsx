import { Box, Button, Checkbox, Input, Text } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import Layout from '../components/Layout'

function Login() {
  const [name, setName] = useState<string>('')

  const handleChangeName = (username: string) => {
    setName(username)
  }

  return (
    <Layout isCentered={true} hasLogo={true}>
      <Box
        display='flex'
        justifyContent='center'
        flexDir='column'
        gap={4}
        minWidth='20%'
        padding={10}
      >
        <Text>Please, enter your full name below</Text>
        <Text>Only alphabetical characters are accepted</Text>
        <Input
          marginX='auto'
          value={name}
          onChange={(ev: ChangeEvent<HTMLInputElement>) => handleChangeName(ev.target.value)}
          placeholder='Full name'
          backgroundColor='white'
        />
        <Checkbox
          marginX='auto'
          colorScheme='blue'
          borderColor='whiteAlpha.700'
          _empty={{ bg: "white" }}
        >
          Are you older than 18 years old?
        </Checkbox>
        <Button
          marginX='auto'
          w='30%'
          variant='solid'
          _invalid={{
            bg: '#52525B',
          }}
          backgroundColor='#5D5FEF'
          color='white'
          isDisabled={true}
        >
          Enter
        </Button>
      </Box>
    </Layout>
  )
}

export default Login
