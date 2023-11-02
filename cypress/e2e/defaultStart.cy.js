describe('Open page and test basic layout', () => {
  it('Opens up the homepage and tests there is a form', () => {
    cy.visit('/')
    cy.get('form').find("input[type=text]")
    cy.get('form').find("button")
  })


  it('Opens up the homepage and tests there is a container for guessed letters', () => {
    cy.visit('/')
    cy.get('.guessed').first().find("h2").should('have.text', "Not in Word")
    cy.get(".guessed")
    .find("div")
    .should("have.class", "guessedContainer")
    .should('be.empty')
  })

  it("Opens up the homepage and tests there is a container for the puzzle word", () => {
    cy.visit("/")
    cy.get(".puzzleWord")
    .first()
    .find("p")
    .should("contain", "_")
    .invoke("text")
    .should("match", /(_ ){3,6}/)
    
    .should("match", /[^a-zA-Z]/g)
  })
})


