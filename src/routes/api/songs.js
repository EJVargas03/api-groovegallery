import { Router } from 'express'

import {
  getSong,
  getSongs,
  addSong,
  updateSong,
  deleteSong,
} from '../../models/songs'

const router = Router()

router.get('/', async (req, res) => {
  const songs = getSongs()
  res.send(songs)
})

router.get('/:id', async (req, res) => {
  const song = await getSong(req.params.id)
  if (song) {
    res.send(song)
  } else {
    res.status(404).send({ msg: 'song not found' })
  }
})

router.post('/', async (req, res) => {
  const song = await addSong(req.body)
  res.send(song)
})

router.put('/:id', async (req, res) => {
  const song = await updateSong(req.params.id, req.body)
  if (song) {
    res.send(song)
  } else {
    res.status(404).send({ msg: 'song not found' })
  }
})

router.delete('/:id', async (req, res) => {
  const song = await deleteSong(req.params.id)
  if (song) {
    res.send(song)
  } else {
    res.status(404).send({ msg: 'song not found' })
  }
})

export default router