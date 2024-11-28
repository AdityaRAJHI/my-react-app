import { Box, Heading, Text, Container, Stack, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          About <br />
          <Text as={'span'} color={'blue.400'}>
            Your Application
          </Text>
        </Heading>
        <Text color={'gray.500'}>
          This is a modern web application built with React and powered by various
          cutting-edge technologies. The tech stack includes React, Vite, React Router,
          and Chakra UI for beautiful, responsive designs.
        </Text>
        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}
        >
          <Button
            colorScheme={'blue'}
            bg={'blue.400'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: 'blue.500',
            }}
            as={Link}
            to="/"
          >
            Back to Home
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}

export default About
