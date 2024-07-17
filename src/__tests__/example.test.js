// @ts-check

import {
  screen,
} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { test } from '@jest/globals'
import { debug } from 'jest-preview'
// import from '@hexlet/tic-tac-toe/public/style.css'
import { TicTacToe } from '@hexlet/tic-tac-toe'

test('test', async () => {
  const game = new TicTacToe(document.body)
  game.start()

  debug()
  // /** @type {HTMLInputElement} */
  /* const input = screen.getByLabelText('Name') */
  /**/
  /* const famousProgrammerInHistory = 'Ada Lovelace' */
  /* input.value = famousProgrammerInHistory */
  /**/
  /* const submitButton = screen.getByRole('button', { name: /submit/i }) */
  /**/
  /* submitButton.click() */
  // getByText(document.body, 'Submit').click()

  // const element = await screen.findByTestId('printed-name')
  //
  // expect(element).toHaveTextContent(
  //   famousProgrammerInHistory,
  // )
})
