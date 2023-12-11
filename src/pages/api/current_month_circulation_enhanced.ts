import { NextApiRequest, NextApiResponse } from 'next';

import values from '../../circulation_data.json';
import { DateTime } from 'luxon';
import {TOTAL_SUI_CIRCULATION_NUMBER} from "../../utils/constants";

export default function current_month_circulation_enhanced(
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

    const currentMonthCirculation = result[0].circulatingSupplyValue;

    const responseObject = {
            "symbol": "SUI",
            "currencyCode": "",
            "price": "",
            "marketCap": "",
            "accTradePrice24h": "",
            "circulatingSupply": currentMonthCirculation,
            "maxSupply": TOTAL_SUI_CIRCULATION_NUMBER,
            "provider": "Sui Foundation",
            "lastUpdatedTimestamp": Date.now()
        };

    response.status(200)
        .json(responseObject);
}