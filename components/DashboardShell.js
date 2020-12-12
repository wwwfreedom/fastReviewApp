import { Avatar, Flex, Link, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'

import { Logo } from '@/icons/logo'
import { useAuth } from '@/lib/auth'

const DashboardShell = ({ children }) => {
  const { user } = useAuth()
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        justifyContent="space-between"
        alignItems="center"
        p={4}
        px={8}
      >
        <Stack isInline spacing={4} alignItems="center">
          <NextLink href="/" passHref>
            <Link>
              <Logo color="#000" boxSize="32px" />
            </Link>
          </NextLink>
          <NextLink href="/sites" passHref>
            <Link>Sites</Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link>Feedback</Link>
          </NextLink>
        </Stack>
        <Flex alignItems="center">
          {user && (
            <NextLink href="/account" passHref>
              <Link mr={4}>Account</Link>
            </NextLink>
          )}
          <Avatar size="sm" src={user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100vh">
        <Flex direction="column" maxWidth={800} mx="auto" w="100%">
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DashboardShell
