import { Flex, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex w="100%" px="2" justify="center" align="center" h="24">
      <Image src="svg/logo.svg" alt="Worldtrip" w="200px" />
    </Flex>
  )
}
