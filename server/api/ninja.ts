interface CurrencyApiResponse {
    data: any; // Update 'any' to match the actual type structure of the 'data' property
    // Add other properties as needed
}

export default defineEventHandler(async (event) => {
    // handle query params
    const { name } = getQuery(event);

    const {currencyKey} = useRuntimeConfig()

    // handle post data
    // const {age} = await readBody(event)

    // api call with private key
    const response = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)

    // Type assertion to inform TypeScript about the structure of the response
    const responseData = response as CurrencyApiResponse;

    return responseData.data; // Now TypeScript recognizes 'data'
});
