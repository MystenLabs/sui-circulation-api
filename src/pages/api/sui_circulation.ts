import { NextApiRequest, NextApiResponse } from 'next';

import values from '../../circulation_data.json';

export default function sui_circulation(
    request: NextApiRequest,
    response: NextApiResponse,
) {
    response.status(200)
        .json(values);
}