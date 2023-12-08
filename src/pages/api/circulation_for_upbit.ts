import { NextApiRequest, NextApiResponse } from 'next';

import values from '../../circulation_data.json';
import { DateTime } from 'luxon';
import {TOTAL_SUI_CIRCULATION_NUMBER} from "../../utils/constants";

export default function circulation_for_upbit(
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

/**
 *   {
 *     "symbol": "BTC",
 *     "currencyCode": "KRW",
 *     "price": 39296339.41959793,
 *     "marketCap": 731119437172996.5,
 *     "accTradePrice24h": 64801881977219.54,
 *     "circulatingSupply": 18605431,
 *     "maxSupply": 18605431,
 *     "provider": "Your company",
 *     "lastUpdatedTimestamp": 1611133137325
 *   },
 */