import { Box, Button, Checkbox, Input, Text } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { string } from 'yup'
import { useUser } from '../contexts/UserContext'
import Layout from '../components/Layout'

function Login() {
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const navigate = useNavigate()

  const nameSchema = string()
    .matches(/^[aA-zZ ]*$/)
    .trim()
    .required()

  const { handleUser } = useUser()

  const handleChangeName = async (username: string) => {
    setName(username)

    let hasError = false

    try {
      await nameSchema.validate(username, { strict: true })
    } catch {
      hasError = true
    }

    setError(hasError)
  }

  const handleConfirmAge = () => {
    setIsChecked(prevState => !prevState)
  }

  const handleLogin = () => {
    handleUser(name)

    navigate('/brewery')
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
          onChange={async (ev: ChangeEvent<HTMLInputElement>) =>
            await handleChangeName(ev.target.value)
          }
          placeholder='Full name'
          backgroundColor='white'
        />
        <Checkbox
          marginX='auto'
          colorScheme='blue'
          borderColor='whiteAlpha.700'
          checked={isChecked}
          onChange={handleConfirmAge}
          _empty={{ bg: 'white' }}
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
          isDisabled={!isChecked || error}
          onClick={handleLogin}
        >
          Enter
        </Button>
      </Box>
    </Layout>
  )
}

export default Login
