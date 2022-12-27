import './counter.css'
import React from 'react'

import { Counter } from './Counter.jsx'

describe('reactive-state Counter', () => {
  it('increments count on click', () => {
    cy.mount(
      <div className="App">
        <Counter />
      </div>
    )

    cy.contains('.count', '0').click().click().click()

    cy.contains('.count', '3')

    cy.eyesCheckWindow()
  })
})
