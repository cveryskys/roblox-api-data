import { getUserData, getDecalData } from '../data/functions.js'

export const eventHandler = (app) => {
  app.post('/user', async (req, res) => {
    const { username } = req.body
    try {
      const data = await getUserData(username)
      res.json(data)
    } catch {
      res.status(500).send('Invalid Username or Error Occurred')
    }
  })

  app.post('/decal', async (req, res) => {
    const { id } = req.body
    try {
      const data = await getDecalData(id)
      if (data) res.json(data)
      else res.status(404).send('Not a decal')
    } catch {
      res.status(500).send('Invalid ID or Error Occurred')
    }
  })
}
