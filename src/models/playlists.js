import { v4 as uuid } from 'uuid'

const playlists = []

export const getPlaylists = () => playlists

export const getPlaylist = (id) => {
    return playlists.find((playlist) => playlist.id === id)
}

export const createPlaylist = (playlist) => {
    const id = uuid()
    playlists.push({ id, ...playlist})
    return getPlaylist(id)
}

export const updatePlaylist = (id, playlist) => {
    const databasePlaylist = getPlaylist(id)
    if (databasePlaylist) {
        const playlistIndex = playlists.findIndex((p) => p.id === id)
        playlists[playlistIndex] = { id, ...playlist}
    }
    return getPlaylist(id)
}

export const deletePlaylist = (id) => {
    const playlistIndex = playlists.findIndex((p) => p.id === id)
    if (playlistIndex !== -1) {
        playlists.splice(playlistIndex, 1)
        return true
    }
    return false
}