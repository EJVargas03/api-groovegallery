import db from '../utils/db'

export const getSongs = async (skip, take) => {
  const count = await db.songs.count()
  const songs = await db.songs.findMany({
    skip,
    take,
  })
  return { count, songs }
}

export const getSong = async (id) =>
  db.songs.findUnique({ where: { songId: id } })

export const addSong = async (songData) =>
  db.songs.create({ data: { ...songData } })

export const updateSong = async (id, songData) => {
  const songs = await getSong(id)
  if (songs) {
    return db.songs.update({
      where: { songId: id },
      data: { ...songs, ...songData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteSong = async (id) =>
  db.songs.delete({ where: { songId: id } })