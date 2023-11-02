import React from 'react'
import Form from './Form'

describe('<Form />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Form />)
    cy.get("form").should("have.class", "form")
    cy.get("input").should("have.attr", "maxLength").should('have.length', "1")
    cy.get("button").should("have.text", "Guess").should("have.length", 1)
  })
})