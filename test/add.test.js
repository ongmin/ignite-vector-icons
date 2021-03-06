const test = require('ava')
const sinon = require('sinon')
const plugin = require('../plugin')

test('adds itself', async t => {
  const addModule = sinon.spy()
  const addPluginComponentExample = sinon.spy()

  const context = {
    ignite: {
      addModule: addModule,
      addPluginComponentExample: addPluginComponentExample
    }
  }

  await plugin.add(context)
  t.true(addModule.calledWith('react-native-vector-icons', { version: '4.3.0', link: true }))
  t.true(
    addPluginComponentExample.calledWith('vectorExample.js.ejs', {
      title: 'Vector Icons'
    })
  )
})
