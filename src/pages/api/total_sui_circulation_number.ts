import { NextApiRequest, NextApiResponse } from 'next';
import {TOTAL_SUI_CIRCULATION_NUMBER} from "../constants";

export default function total_sui_circulation_number(
    request: NextApiRequest,
    response: NextApiResponse,
) {

    response.status(200)
        .json(TOTAL_SUI_CIRCULATION_NUMBER);
}