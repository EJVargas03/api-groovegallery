import { Router } from 'express'

import {
    getPlaylist,
    getPlaylists,
    updatePlaylist,
    createPlaylist,
    deletePlaylist,
} from '../../models/playlists'

const router = Router()

router.get('/', (req, res) => {
    const playlists = getPlaylists
    res.send(playlists)
})

router.get('/:id', (req, res) => {
    const playlist = getPlaylist(req.params.id)
    if (playlist) {
        res.send(playlist)
    }
    res.status(404).send({ msg: 'Playlist not found' })
})

router.post('/', (req, res) => {
    const newPlaylist = createPlaylist(req.params.id)
    if (newPlaylist) {
        res.status(201).send(newPlaylist)
    }
    res.status(400).send({ msg: 'Bad request' })
})

router.put('/:id', (req, res) => {
    const updatedPlaylist = updatePlaylist(req.params.id, req.body)
    if (updatedPlaylist) {
        res.send(updatePlaylist)
    }
    res.status(404).send({ msg: 'Person not found' })
})

router.delete('/:id', (req, res) => {
    const deleted = deletePlaylist(req.params.id)
  if (deleted) {
    res.send({ msg: `Playlist ${req.params.id} Deleted` })
  }
  res.status(404).send({ msg: 'Playlist not found' })
})

export default router
