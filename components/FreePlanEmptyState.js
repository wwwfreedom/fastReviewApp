import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'

import { useAuth } from '@/lib/auth'
import { createCheckoutSession } from '@/lib/firestoreDb'

export default function FreePlanEmptyState() {
  const { user } = useAuth()
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false)
  return (
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius={4}
      p={16}
      direction="column"
      align="center"
    >
      <Heading size="lg" mb={2}>
        Get review on your site instantly.
      </Heading>
      <Text mb={4}>Start today, then grow with us. 🌱</Text>
      <Button
        onClick={() => {
          setIsCheckoutLoading(true)
          createCheckoutSession(user.uid)
        }}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        ml={4}
        isLoading={isCheckoutLoading}
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)',
        }}
      >
        Upgrade to Starter
      </Button>
    </Flex>
  )
}
