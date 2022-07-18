import {
  Box,
  chakra,
  GridItem,
  HStack,
  IconButton,
  Input,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from '@chakra-ui/react'
import { IoTrash } from 'react-icons/io5'
import { HiOutlineChartSquareBar, HiOutlinePhone } from 'react-icons/hi'
import { BsFillGeoAltFill } from 'react-icons/bs'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MdLabel } from 'react-icons/md'
import Brewery from '../types/Brewery'
import { ChangeEvent, useState } from 'react'

const CIoTrash = chakra(IoTrash)
const CHiBar = chakra(HiOutlineChartSquareBar)
const CHiPhone = chakra(HiOutlinePhone)
const CBsGeo = chakra(BsFillGeoAltFill)
const CAiPlus = chakra(AiOutlinePlusCircle)
const CMdLabel = chakra(MdLabel)

interface CardProps {
  index: number
  brewery: Brewery
  onDelete: (index: number) => void
}

function Card({ index, brewery, onDelete }: CardProps) {
  const [extra, setExtra] = useState<string>(brewery.custom)

  const handleExtraInformation = (value: string) => {
    setExtra(value)
  }

  return (
    <GridItem>
      <Box
        backgroundColor='white'
        w='100%'
        padding={8}
        border='1px'
        borderRadius='8px'
        minHeight='260px'
        borderColor='blackAlpha.300'
      >
        <Box position='relative'>
          <IconButton
            aria-label='delete brewery'
            variant='ghost'
            icon={<CIoTrash />}
            position='absolute'
            top={1}
            right={1}
            onClick={() => onDelete(index)}
          />
        </Box>
        <Text fontWeight='bold' mb={4}>
          {brewery.name}
        </Text>
        <Box mb={4}>
          {brewery.street && <Text>{brewery.street}</Text>}
          <Text>{`${brewery.city}, ${brewery.state} - ${brewery.country}`}</Text>
        </Box>
        <Box gap={4}>
          <HStack mb={2} gap={2}>
            {brewery.type && (
              <Tag variant='subtle' borderRadius='full' backgroundColor='#F2EC54'>
                <TagLeftIcon boxSize='12px' as={CHiBar} />
                <TagLabel>{brewery.type}</TagLabel>
              </Tag>
            )}
            {brewery.postalCode && (
              <Tag variant='subtle' borderRadius='full' backgroundColor='#F2EC54'>
                <TagLeftIcon boxSize='12px' as={CBsGeo} />
                <TagLabel>{brewery.postalCode}</TagLabel>
              </Tag>
            )}
          </HStack>
          <HStack gap={2}>
            {brewery.phone && (
              <Tag variant='subtle' borderRadius='full' backgroundColor='#F2EC54'>
                <TagLeftIcon boxSize='12px' as={CHiPhone} />
                <TagLabel>{brewery.phone}</TagLabel>
              </Tag>
            )}
            <Tag variant='subtle' borderRadius='full' backgroundColor='#F2EC54'>
              <TagLeftIcon boxSize='12px' as={extra ? MdLabel : CAiPlus} />
              <TagLabel>
                <Input
                  placeholder='add more'
                  minWidth='60px'
                  height='20px'
                  fontSize='12px'
                  variant='unstyled'
                  value={extra}
                  onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                    handleExtraInformation(ev.target.value)
                  }
                ></Input>
              </TagLabel>
            </Tag>
          </HStack>
        </Box>
      </Box>
    </GridItem>
  )
}

export default Card
