import axios from 'axios';
import { authHeader } from '../utils/_helpers/authHeaders';

export const getUser = async () => {
    try {
        const res = await axios.get(
            `https://api.github.com/user`,
            {
                method: "GET",
                // accept: "*/*",
                headers: authHeader(),
            },
        );
        // console.log(res)
        return res
    } catch (error) {
        console.log(error.message)
    }
}