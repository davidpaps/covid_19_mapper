import * as React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Header from './navbar'
import renderer from 'react-test-renderer';

describe("Navbar Component", () => {
  it('does not crash when loaded onto page', () => {
    shallow(<Header total={[]} />)
  })
  it('render correctly Header component', () => {
    const TextInputComponent = renderer.create(<Header total={[]} globalCFR={[2.9587486]} totalInt={[]} countries={[]} integerCountries={[]} />).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
  });
})