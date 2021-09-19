import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { TravelTypes } from 'components/TravelTypes'
import { Header } from 'components/Header'
import { Hero } from 'components/Hero'
import { Container } from 'styles/swiper'

SwiperCore.use([Navigation, Pagination])

export default function Home() {
  return (
    <Flex flexDir="column" w="100%" maxW={1440} mx="auto">
      <Header />
      <Hero />
      <TravelTypes />

      <Flex justify="center" w="100%">
        <Box mt="-5" h="3px" w="100px" bg="gray.700" />
      </Flex>

      <Heading textAlign="center" fontWeight="normal" mt="8">
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>

      <Container>
        <Swiper
          pagination={{
            clickable: true
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
              bgImage="url('img/europa.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              objectFit="contain"
              bgSize="100%"
              w="100%"
              h="100%"
            >
              <Flex align="center" justify="center" h="100%" flexDir="column">
                <Text color="white" fontWeight="bold" fontSize="3xl">
                  EUROPA
                </Text>
                <Text color="white" fontWeight="bold" fontSize="2xl">
                  O continente mais antigo.
                </Text>
              </Flex>
            </Box>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
      </Container>
    </Flex>
  )
}
