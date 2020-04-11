import * as React from 'react';
import MapContainer from './map'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const component = renderer.create(<MapContainer countries={[]} total={[]} globalCFR={[]} integerCountries={[]} />).toJSON()
  expect(component).toMatchSnapshot()
})


