import React from 'react'
import moment from 'moment'
import { View, Text } from 'react-native'

export default function TreatmentItem ({data}) {
  return (
    <View>
      <Text text={moment(data.item.time)} />
    </View>
  )
}
