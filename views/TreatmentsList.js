import React from 'react'
import TreatmentItem from '../components/TreatmentItem'
import { FlatList, View } from 'react-native'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'

class TreatmentsListComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = ({navigation}) => {
    return {
      right: (
        <Button text="Add" onPress={navigation.params.onAddClicked} />
      )
    }
  }

  _addClicked() {
    // TODO add this later
  }

  componentDidMount() {
    this.props.navigation.setParams({onAddClicked: this._addClicked})
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.allTreatments}
          item={(item, i) => <TreatmentItem data={item} />} />
      </View>
    )
  }
}

export default graphql(gql`
  {
    allTreatments {
      time
    }
  }
`)(TreatmentsListComponent)
