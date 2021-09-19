import { Flex, SimpleGrid, Image, Text } from '@chakra-ui/react'

export function TravelTypes() {
  return (
    <SimpleGrid
      minChildWidth="128px"
      my={['20', '7rem']}
      px={['2', '20']}
      gap="10"
    >
      <Flex flexDir="column" align="center">
        <Image src="svg/cocktail.svg" alt="vida nortuna" w="85" />
        <Text fontWeight="semibold" fontSize="1.2rem" mt="3">
          Vida noturna
        </Text>
      </Flex>
      <Flex flexDir="column" align="center">
        <Image src="svg/surf.svg" alt="surf" w="85" />
        <Text fontWeight="semibold" fontSize="1.2rem" mt="3">
          Praia
        </Text>
      </Flex>
      <Flex flexDir="column" align="center">
        <Image src="svg/building.svg" alt="morderno" w="85" />
        <Text fontWeight="semibold" fontSize="1.2rem" mt="3">
          moderno
        </Text>
      </Flex>
      <Flex flexDir="column" align="center">
        <Image src="svg/museum.svg" alt="classico" w="85" />
        <Text fontWeight="semibold" fontSize="1.2rem" mt="3">
          clássico
        </Text>
      </Flex>
      <Flex flexDir="column" align="center">
        <Image src="svg/earth.svg" alt="mais" w="85" />
        <Text fontWeight="semibold" fontSize="1.2rem" mt="3">
          e mais...
        </Text>
      </Flex>
    </SimpleGrid>
  )
}
