import React from 'react'
import PuzzleWord from './PuzzleWord'

describe('<PuzzleWord />', () => {
  it('renders only underscores', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PuzzleWord puzzleString={"cat"} guessed={[]} />)
    cy.get(".puzzleWord")
      .first()
      .find("p")
      .should("contain", "_")
      .invoke("text")
      .should("match", /(_ ){3}/)

      .should("match", /[^a-zA-Z]/g)

  })

  it("renders one letter and underscores", () => {
    cy.mount(<PuzzleWord puzzleString={"cat"} guessed={["c"]} />)
    cy.get(".puzzleWord")
      .first().find("p").invoke("text")
      .should("match", /c _ _ /)
  })

  it("renders all letters and no underscores", () => {
    cy.mount(<PuzzleWord puzzleString={"cat"} guessed={["c", "d", "a", "t", "r"]} />)
    cy.get(".puzzleWord")
      .first().find("p").invoke("text")
      .should("match", /c a t /)
  })
})