import { Router } from 'express'

import playlists from './playlists'

const router = Router()

router.get('/', (req, res) => {
    res.send({msg: 'Inside API enpoints'})
})

router.use('/playlists', playlists)

export default router