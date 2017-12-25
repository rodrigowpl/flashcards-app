import React, { PureComponent } from 'react'
import { ScrollView, Text } from 'react-native'
import PropTypes from 'prop-types'
import { searchDecks } from 'reducers/decks/action-creators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Deck from './deck'

class DeckList extends PureComponent {
	componentDidMount () {
		const { searchDecks } = this.props

		searchDecks()
	}

	render () {
		const { decks } = this.props

		return (
			<ScrollView>
				{decks ? decks.map((deck, index) => (
					<Deck
						key={index}
						deck={deck}
						marginTop={index > 0} />
				)) : <Text> Nenhum card :( </Text>}
			</ScrollView>
		)
	}
}

DeckList.propTypes = {
	decks: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		avaliableCards: PropTypes.number.isRequired
	}))
}

const mapStateToProps = ({ decks }) => decks
const mapDispatchToProps = dispatch => bindActionCreators({ searchDecks }, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DeckList)
