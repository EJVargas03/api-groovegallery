import db from '../utils/db'

export const getSongs = async (skip, take) => {
  const count = await db.song.count()
  const songs = await db.song.findMany({
    skip,
    take,
  })
  return { count, songs }
}

export const getSong = async (id) =>
  db.song.findUnique({ where: { songId: id } })

export const addSong = async (songData) =>
  db.song.create({ data: { ...songData } })

export const updateSong = async (id, songData) => {
  const song = await getSong(id)
  if (song) {
    return db.song.update({
      where: { songId: id },
      data: { ...song, ...songData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteSong = async (id) =>
  db.song.delete({ where: { songId: id } })