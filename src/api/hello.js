export default function handler(request, response) {
    const data = { message: 'Hello' }

    return response.status(200).json(data)
}
