import { useAuth } from '@/lib/auth'
import { updateFeedback } from '@/lib/firestoreDb'
import { Box, Code, Switch } from '@chakra-ui/react'
import produce from 'immer'
import { useState } from 'react'
import { mutate } from 'swr'
import RemoveButtonAlert from './RemoveButton'
import { Td } from './Table'

export default function FeedbackRow({ feedback }) {
  const { status, author, text, id } = feedback
  const [isChecked, setIsChecked] = useState(status === 'active')
  const auth = useAuth()

  const toggleFeedback = async () => {
    setIsChecked(!isChecked)
    const updatedStatus = !isChecked ? 'active' : 'pending'

    // update feedback status optimistically
    // refer here for context on immer usage https://sergiodxa.com/articles/swr/mutate-immer
    mutate(
      ['/api/feedback', auth.user.token],
      produce((data) => {
        const updatedFeedbackIndex = data.feedback.findIndex((i) => i.id === id)
        data.feedback[updatedFeedbackIndex].status = updatedStatus
      }),
      false
    )
    await updateFeedback(id, { status: updatedStatus })
    mutate(['/api/feedback', auth.user.token])
  }

  return (
    <Box as="tr">
      <Td fontWeight="medium">{author}</Td>
      <Td>{text}</Td>
      <Td>
        <Code>{'/'}</Code>
      </Td>
      <Td>
        <Switch
          colorScheme="green"
          onChange={toggleFeedback}
          isChecked={isChecked}
        />
      </Td>
      <Td>
        <RemoveButtonAlert feedbackId={id} />
      </Td>
    </Box>
  )
}
