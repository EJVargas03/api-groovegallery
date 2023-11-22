import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send({msg: 'Inside playlist'})
})

router.get('/:id', (req, res) =>
    res.send({ msg:`Getting Playlist ${req.params.id}` })
)

router.post('/', (req, res) =>
    res.send({ msg:'Creating Playlist' })
)

router.put('/:id', (req, res) =>
    res.send({ msg:`Updating Playlist ${req.params.id}` })
)

router.delete('/:id', (req, res) =>
    res.send({ msg:`Deleting Playlist ${req.params.id}` })
)

export default router
