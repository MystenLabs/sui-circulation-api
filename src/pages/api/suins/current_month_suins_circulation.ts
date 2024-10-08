import { NextApiRequest, NextApiResponse } from 'next';

import values from '../../../circulation_data_suins.json';
import { DateTime } from 'luxon';

export default function sui_circulation(
    request: NextApiRequest,
    response: NextApiResponse,
) {

    const nyTime = DateTime.local().setZone("America/New_York");
    const month = nyTime.month;
    const year = nyTime.year;

    const result =
        values.filter(
            val =>
                val.month === month && val.year === year
        );

    response.status(200)
        .json(result[0]);
}