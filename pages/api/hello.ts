// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { IMenuItem } from '../../interfaces/menu.interface';
import { data } from '../../data';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IMenuItem[]>
) {
    res.status(200).json(data.menu);
}
