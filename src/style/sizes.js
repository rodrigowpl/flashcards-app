import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const CONTAINER_PADDING = 10
export const SIZE_WIDTH_CONTAINER = width - (CONTAINER_PADDING * 2)