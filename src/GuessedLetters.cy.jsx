import React from 'react'
import GuessedLetters from './GuessedLetters'

describe('<GuessedLetters />', () => {
  it('renders no letters when none guessed are wrong', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GuessedLetters puzzleString={"cat"} guessed={["c", "a", "t"]} />)
    cy.get(".guessed")
      .find("div")
      .should("have.class", "guessedContainer")
      .should('be.empty')
  })

  it('renders one letters when one letter not in the word is guessed', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GuessedLetters puzzleString={"cat"} guessed={["c", "a", "t", "r"]} />)
    cy.get(".guessed")
      .find("div")
      .find("div")
      .invoke("text")
      .should("match", /r/)

  })

  it('renders six letters when six letter not in the word is guessed', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GuessedLetters puzzleString={"cat"} guessed={["c", "a", "t", "r", "p", "u", "v", "w", "o"]} />)
    cy.get(".guessed")
      .find("div")
      .find("div")
      .should("have.length", 6)
    cy.get(".guessed").find("div").find("div")
      .first().invoke("text").should('match', /r/)
    cy.get(".guessed").find("div").find("div")
      .last().invoke("text").should("match", /o/)

  })

})