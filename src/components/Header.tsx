import { useNavigate } from 'react-router-dom'
import { Box, chakra, IconButton, Text } from '@chakra-ui/react'
import { IoArrowBackCircle } from 'react-icons/io5'
import { useUser } from '../contexts/UserContext'

const CIoBack = chakra(IoArrowBackCircle)

function Header() {
  const { user } = useUser()

  const navigate = useNavigate()

  return (
    <Box
      display='flex'
      h='5%'
      backgroundColor='#F2EC54'
      paddingX={6}
      paddingY={4}
      justifyContent='space-between'
      alignItems='center'
    >
      <Box display='flex' alignItems='center' gap={2}>
        <IconButton
          aria-label='back'
          variant='ghost'
          icon={<CIoBack size='md' />}
          onClick={() => navigate(-1)}
        />
        <Text>Go back</Text>
      </Box>
      <Text>{user}</Text>
    </Box>
  )
}

export default Header
