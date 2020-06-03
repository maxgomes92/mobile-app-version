import { getAndroidVersion, getIosVersion } from './index'
import semver from 'semver'

test('adds 1 + 2 to equal 3', async () => {
  const version = await getAndroidVersion('com.makeztec.bomdiadatitia')
  expect(semver.valid(version)).ok()
})