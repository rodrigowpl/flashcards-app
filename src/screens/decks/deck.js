import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { white, blackDark, grayDark } from 'style/colors'

const DeckStyled = styled.View`
  background-color: ${white};
  height: 120px;
  border-color: ${grayDark};
  border-width: 1px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-top: ${p => p.marginTop ? 10 : 0};
`

const TitleStyled = styled.Text`
  color: ${blackDark};
  font-size: 18px;
`
const AvaliableCardStyled = styled.Text`
  color: ${grayDark};
  font-size: 12px;
`

const Deck = ({ deck, marginTop = false }) => (
  <DeckStyled marginTop={marginTop}>
    <TitleStyled>{deck.title}</TitleStyled>
    <AvaliableCardStyled>{deck.avaliableCards}</AvaliableCardStyled>
  </DeckStyled>
)

Deck.propTypes = {
  marginTop: PropTypes.bool
}

export default Deck
