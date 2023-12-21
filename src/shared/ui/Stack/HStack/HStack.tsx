import { type FC } from 'react'
import Flex, { type FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

const HStack: FC<HStackProps> = (props) => {
  return <Flex direction='row' {...props}/>
}

export default HStack
