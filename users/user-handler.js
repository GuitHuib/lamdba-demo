export async function getUser(event) {
    return {
        statusCode: 200,
        body: JSON.stringify('USER: Ryan Wallace')
    }
}