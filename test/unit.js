import test from 'ava'
import Kinetic from '../build'

test('it has a lifecycle', assert => {
  const node = document.createElement('div')
  const kinetic = new Kinetic(node)
  assert.truthy(kinetic)
  kinetic.destroy()
})
