import { SET_PROJECT_PHOTOS } from './mutations.type'

export const state = () => ({
  photos: [],
})

export const mutations = {
  [SET_PROJECT_PHOTOS](state, list) {
    state.photos = list
  },
}

export const actions = {
  getPosts(files) {
    return files.keys().map((key) => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
  },
  async nuxtServerInit({ commit }) {
    // Photos collection type
    let photoFiles = await require.context(
      '~/content/photos/',
      false,
      /\.json$/
    )
    await commit(SET_PROJECT_PHOTOS, actions.getPosts(photoFiles))
  },
}
