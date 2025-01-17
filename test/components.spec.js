import {base, sleep} from './util'
import HistoryRouterApp from './components/history-router-app.riot'
import {component} from 'riot'
import {expect} from 'chai'
import {router} from '../src'

describe('components', function() {
  it('The router contents get properly rendered', async function() {
    const el = document.createElement('div')
    const comp = component(HistoryRouterApp)(el, {
      base
    })

    await sleep()

    expect(comp.$('p')).to.be.ok

    router.push('/goodbye/gianluca')

    await sleep()

    expect(comp.$('p').innerHTML).to.be.equal('Goodbye gianluca')

    comp.unmount()
  })
})