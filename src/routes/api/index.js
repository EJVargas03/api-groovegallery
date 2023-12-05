import { Router } from 'express'
import basicAuth from 'express-basic-auth'

import songs from './songs'

const router = Router()

router.use(
  basicAuth({
    users: { [process.env.ADMIN_USER]: process.env.ADMIN_PASSWORD },
  }),
)


router.get('/', (req, res) => {
    res.send({msg: 'Inside API enpoints'})
})

router.use('/songs', songs)

export default router
