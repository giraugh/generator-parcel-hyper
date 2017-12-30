import { h, app } from 'hyperapp'

const state = {}

const actions = {}

const view = (state, actions) => (
  <div>
    <h1> Hyperapp! </h1>
  </div>
)

export const main = app(state, actions, view, document.body)
