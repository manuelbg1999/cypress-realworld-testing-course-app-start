

describe("Llenar formulario", () => {

  //AQUI SE ESCRIBEN LOS ESCENARIOS CON EL IT
  it("Llenar el formulario de prueba de ToolsQA", () => {

    //METODO PARA ACCEDER A LA PAGINA
    cy.visit("https://demoqa.com/elements")

    //METODO PARA ACCEDER AL VALOR DEL ELEMENTO
    //PARA LOS LOCALIZADORES SE USA EL CSS SELECTOR
    cy.get("#app > div > div > div.pattern-backgound.playgound-header > div").contains!("Elements")
    cy.get("#item-0").click()
    cy.get("#userName").type("Manuel Bolaño")
    cy.get("#userEmail").type("manuelbg1999@gmail.com")
    cy.get("#currentAddress").type("cerete cordoba")
    cy.get("#permanentAddress").type("villa celina")
    cy.get("#submit").click()
  })

  })

