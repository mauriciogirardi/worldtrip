import { Flex, Text, Box, Image, useBreakpointValue } from '@chakra-ui/react'

export function Hero() {
  const wiseScreenVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box
      bgImage="url('img/background.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h={['235px', '335px']}
      px={['4', '2', '5', '10', '40']}
    >
      <Flex h="100%" align="center" justify="space-between">
        <Box>
          <Text color="gray.50" fontSize={['3xl', '4xl']} lineHeight="short">
            5 Continentes,
            <br /> infinitas possibilidades.
          </Text>
          <Text mt="4" color="gray.50" fontSize={['17', '20']} fontWeight="300">
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.
          </Text>
        </Box>

        {wiseScreenVersion && (
          <Image mt="40" src="svg/airplane.svg" alt="airplane" w="400px" />
        )}
      </Flex>
    </Box>
  )
}
