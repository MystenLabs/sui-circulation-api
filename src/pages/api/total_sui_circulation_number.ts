import { NextApiRequest, NextApiResponse } from 'next';

export default function total_sui_circulation_number(
    request: NextApiRequest,
    response: NextApiResponse,
) {

    response.status(200)
        .json(10000000000);
}