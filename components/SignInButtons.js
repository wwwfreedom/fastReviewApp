import { Button, Spinner, Stack } from '@chakra-ui/react'

import GithubLogo from '@/icons/github'
import GoogleLogo from '@/icons/google'
import { useAuth } from '@/lib/auth'

export default function SignInButtons() {
  const { signinWithGitHub, signinWithGoogle, loading } = useAuth()
  if (loading) {
    return <Spinner />
  }

  return (
    <Stack spacing={4}>
      <Button
        size="md"
        leftIcon={<GithubLogo />}
        onClick={() => signinWithGitHub('/sites')}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)',
        }}
      >
        Sign In with Github
      </Button>
      <Button
        leftIcon={<GoogleLogo />}
        size="md"
        onClick={() => signinWithGoogle('/sites')}
        backgroundColor="white"
        color="gray.900"
        fontWeight="medium"
        variant="outline"
        _hover={{ bg: 'gray.100' }}
        _active={{
          bg: 'gray.100',
          transform: 'scale(0.95)',
        }}
      >
        Sign In with Google
      </Button>
    </Stack>
  )
}
