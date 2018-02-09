import React from 'react'
import { TabNavigation } from 'react-navigation'
import { DashboardView } from './Dashboard'
import TreatmentsView from './Treatments'
import DashboardView from './Dashboard'

export default new TabNavigation(
  {
      Dashboard: {screen: DashboardView},
      Treatments: {screen: TreatmentsView}
  }
)
