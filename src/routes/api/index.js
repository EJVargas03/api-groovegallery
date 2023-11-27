import { Router } from 'express'

import playlists from './playlists'
import songs from './songs'

const router = Router()

router.get('/', (req, res) => {
    res.send({msg: 'Inside API enpoints'})
})

router.use('/playlists', playlists)
router.use('/songs', songs)

export default router