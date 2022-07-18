import { Box, Image } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Bee from "../assets/bee.svg"

interface LayoutProps {
  children: ReactNode
  hasLogo?: boolean
  isCentered?: boolean
}

function Layout({ children, hasLogo = false, isCentered = false }: LayoutProps) {
  return (
      <Box display='flex' w='100vw' h='100vh' backgroundColor="#F2EC54" justifyContent={isCentered ? 'center' : 'normal'}>
        {children}
        {hasLogo && <Image src={Bee} position="absolute" left="0" bottom="0" boxSize={["100px", "200px", "300px"]} />}
      </Box>
  )
}

export default Layout
