// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  ImageContainer,
  Image,
  Button,
  Paragraph,
} from './styledComponents'

const Unlock = () => {
  const [state, setState] = useState(false)

  const imageUrl = state
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const altText = state ? 'unlock' : 'lock'
  const text = state ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = state ? 'Lock' : 'Unlock'

  const onClickButton = () => {
    setState(prevState => !prevState)
  }

  return (
    <MainContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={altText} />
      </ImageContainer>
      <Paragraph>{text}</Paragraph>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </MainContainer>
  )
}
export default Unlock
