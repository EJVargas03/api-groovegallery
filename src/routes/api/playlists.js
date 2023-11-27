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
    res.send(playlist)
})

router.post('/', (req, res) => {
    const newPlaylist = createPlaylist(req.params.id)
    res.send(newPlaylist)
})

router.put('/:id', (req, res) => {
    updatePlaylist(req.params.id, req.body)
    res.send({msg: `Person ${req.params.id} Updated`})
})

router.delete('/:id', (req, res) => {
    deletePlaylist(req.params.id)
    res.send({ msg: `Playlist ${req.params.id} Deleted` })
})

export default router
