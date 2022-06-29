import { NextApiRequest, NextApiResponse } from "next";

export default function(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([
        {
            name: 'Andreas',
            age: 35
        },
        {
            name: 'Carlos',
            age: 38
        },
        {
            name: 'Marcus',
            age: 41
        }
    ])
}