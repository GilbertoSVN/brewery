import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  isCentered?: boolean
}

function Layout({ children, isCentered = false }: LayoutProps) {
  return (
    <Box display='flex' w='100vw' h='100vh' backgroundColor="#F2EC54" justifyContent={isCentered ? 'center' : 'normal'}>
      {children}
    </Box>
  )
}

export default Layout
