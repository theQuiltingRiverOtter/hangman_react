import React from 'react'
import PuzzleWord from './PuzzleWord'

describe('<PuzzleWord />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PuzzleWord />)
  })
})