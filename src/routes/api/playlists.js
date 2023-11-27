import { Router } from 'express'

import {
    getPlaylist,
    getPlaylists,
    updatePlaylist,
    createPlaylist,
    deletePlaylist,
} from '../../models/playlists'

const router = Router()

router.get('/', async (req, res) => {
    const size = Number(req.query.size) || 10
    const page = Number(req.query.page) || 1
    const skip = size * (page - 1)
    const take = size
    const { count, playlists } = await getPlaylists(skip, take)
    res.set({
      'X-Total-Count': count,
      'X-Total-Pages': Math.ceil(count / size),
    })
    res.send(playlists)
})

router.get('/:id', async (req, res) => {
    const playlist = await getPlaylist(req.params.id)
    if (playlist) {
        res.send(playlist)
    }
    res.status(404).send({ msg: 'Playlist not found' })
})

router.post('/', async (req, res) => {
    const newPlaylist = await createPlaylist(req.params.id)
    if (newPlaylist) {
        res.status(201).send(newPlaylist)
    }
    res.status(400).send({ msg: 'Bad request' })
})

router.put('/:id', async (req, res) => {
    const updatedPlaylist = await updatePlaylist(req.params.id, req.body)
    if (updatedPlaylist) {
        res.send(updatePlaylist)
    }
    res.status(404).send({ msg: 'Person not found' })
})

router.delete('/:id', async (req, res) => {
    const deleted = await deletePlaylist(req.params.id)
  if (deleted) {
    res.send({ msg: `Playlist ${req.params.id} Deleted` })
  }
  res.status(404).send({ msg: 'Playlist not found' })
})

export default router
