import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { searchDecks } from 'reducers/decks/action-creators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class DeckList extends PureComponent {
	componentDidMount () {
		const { searchDecks } = this.props

		searchDecks()
	}

	render () {
		const { decks } = this.props

		return (
			<View>
				{decks.map((deck, index) => (
					<Text key={index}>{deck.title}</Text>
				))}
			</View>
		)
	}
}

const mapStateToProps = ({ decks }) => decks
const mapDispatchToProps = dispatch => bindActionCreators({ searchDecks }, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DeckList)
