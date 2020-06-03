import axios from 'axios'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id='
const APP_STORE_URL = 'https://apps.apple.com/us/app/'

const ANDROID_REGEX = />Current Version<.*>(?<version>\d{1,}.\d{1,}.\d{1,})</gm
const IOS_REGEX = />Version\s*(?<version>\d{1,}.\d{1,}.\d{1,})</gm

export function getAndroidVersion (id) {
  return new Promise ((resolve, reject) => {
    axios
      .get(PLAY_STORE_URL + id)
      .then(({ data }) => {
        const regex = new RegExp(ANDROID_REGEX)
        const result = regex.exec(data)

        if (result) {
          resolve(result.groups.version)
        } else {
          reject(new Error('It was not possible to parse.'))
        }
      }, err => {
        reject(err)
      })
  })
}

export function getIosVersion (id) {
  return new Promise ((resolve, reject) => {
    axios
      .get(APP_STORE_URL + id)  
      .then(({ data }) => {
        const regex = new RegExp(IOS_REGEX)
        const result = regex.exec(data)

        if (result) {
          resolve(result.groups.version)
        } else {
          reject(new Error('It was not possible to parse.'))
        }
      }, err => {
        reject(err)
      })
  })
}

getAndroidVersion('com.makeztec.bomdiadatitia').then(console.log)
getIosVersion('id433151512').then(console.log)
