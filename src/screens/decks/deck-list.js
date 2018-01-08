import React, { PureComponent } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDecks } from 'reducers/decks/action-creators'
import Deck from './deck'

class DeckList extends PureComponent {
	componentDidMount () {
		this.props.getDecks()
	}

	render () {
		const { decks, onClickCard } = this.props

		return (
			<ScrollView>
				{decks.length > 0 ? decks.map((deck, index) => (
					<TouchableOpacity key={index} onPress={() => onClickCard(deck)}>
						<Deck deck={deck} />
					</TouchableOpacity>
				)) : <Text> Nenhum card :( </Text>}
			</ScrollView>
		)
	}
}

DeckList.propTypes = {
	decks: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	}))
}

const mapStateToProps = ({ decks }) => decks
const mapDispatchToProps = dispatch => bindActionCreators({ getDecks }, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DeckList)
