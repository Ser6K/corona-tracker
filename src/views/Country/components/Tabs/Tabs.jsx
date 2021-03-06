import React from 'react'
import PropTypes from 'prop-types'
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import { Tab as NativeBaseTab, Tabs as NativeBaseTabs } from 'native-base'
import Tab from '../Tab/Tab'

const Tabs = ({ data, onTabChange }) => (
  <ErrorBoundary>
    <NativeBaseTabs
      onChangeTab={({ ref }) => {
        onTabChange(ref.props.heading)
      }}
    >
      <NativeBaseTab heading="Total">
        <Tab data={data} tabName="total" />
      </NativeBaseTab>
      <NativeBaseTab heading="Yesterday">
        <Tab data={data} tabName="yesterday" />
      </NativeBaseTab>
      <NativeBaseTab heading="3 days ago">
        <Tab data={data} tabName="3-days-ago" />
      </NativeBaseTab>
    </NativeBaseTabs>
  </ErrorBoundary>
)

Tabs.propTypes = {
  data: PropTypes.object.isRequired,
  onTabChange: PropTypes.func.isRequired,
}

export default React.memo(Tabs)
