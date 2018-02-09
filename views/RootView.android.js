import React from 'react'
import { DrawerNavigation } from 'react-navigation'
import { DashboardView } from './Dashboard'

export default new DrawerNavigation(
  {
      Dashboard: {screen: DashboardView},
      Treatments: {screen: TreatmentsView}
  }
)
