import React from 'react'
import { StackNavigation } from 'react-navigation'
import TreatmentsListView from './TreatmentsList'
import TreatmentView from './Treatment'

export default new StackNavigation(
  {
    Treatments: { screen: TreatmentsListView },
    Treatment: { screen: TreatmentView }
  }
)
