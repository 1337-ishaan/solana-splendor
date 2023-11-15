import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs'
import path from 'path'

export default async function getMedia(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const filePath = path.resolve('.', `assets/video/${req.query.name}`)
    const imageBuffer = fs.readFileSync(filePath)

    if (req.method !== 'GET') {
        return res.status(404);
    }

    res.setHeader('Content-Type', 'audio/mpeg')
    return res.send(imageBuffer)
}
