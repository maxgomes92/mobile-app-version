/**
 * @jest-environment node
 */
import { getAndroidVersion, getIosVersion } from './index'
import semver from 'semver'

describe('tests Android parser', () => {
  it('fetches android version', async () => {
    const version = await getAndroidVersion('com.makeztec.bomdiadatitia')
    expect(semver.valid(version)).toBeTruthy()
  })

  it('returns 404 to invalid android package', async () => {
    expect(getAndroidVersion('my.invalid.package'))
      .rejects
      .toEqual(new Error('Request failed with status code 404'))
  })
})

describe('tests iOS parser', () => {
  it('fetches iOS version', async () => {
    const version = await getIosVersion('id433151512')
    expect(semver.valid(version)).toBeTruthy()
  })

  it('returns 404 to invalid ios package', async () => {
    expect(getAndroidVersion('0912830912'))
      .rejects
      .toEqual(new Error('Request failed with status code 404'))
  })
})
