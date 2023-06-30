import { NextApiRequest, NextApiResponse } from 'next';

import values from '../../circulation_data.json';
import { DateTime } from 'luxon';

export default function sui_circulation_number(
    request: NextApiRequest,
    response: NextApiResponse,
) {

    const nyTime = DateTime.local().setZone("America/New_York");
    const month = nyTime.month;
    const year = nyTime.year;

    console.log("filtering for month: ", month, " and year: ", year);
    console.log("month: ", month);
    console.log("year: ", year);

    const result =
        values.filter(
            val =>
                val.month === month && val.year === year
        );

    response.status(200)
        .json(result[0].circulatingSupplyValue);
}