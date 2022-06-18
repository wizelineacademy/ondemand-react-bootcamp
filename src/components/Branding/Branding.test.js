import { render, screen } from '@testing-library/react'
import Branding from './Branding'

describe('Branding component', () => {
  it('Ecommerce Store logo appears correctly in the Header.', () => {
    render(<Branding />)
    expect(screen.queryByTestId('logo')).toBeInTheDocument()
  })
  it('Ecommerce Store name appears correctly in the Header.', () => {
    render(<Branding />)
    expect(screen.queryByTestId('name')).toBeInTheDocument()
  })

})