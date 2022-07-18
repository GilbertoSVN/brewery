import { Box } from "@chakra-ui/react";
import { useUser } from "../contexts/UserContext";

function Brewery() {
  const { user } = useUser()

  return <Box>{user}</Box>
}

export default Brewery
