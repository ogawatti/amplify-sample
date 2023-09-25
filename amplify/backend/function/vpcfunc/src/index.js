const axios = require('axios');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const url = 'https://httpbin.org/get';
    const response = await axios.get(url);

    return {
        statusCode: response.status,
        body: response.data,
    };
};
