export interface Item {
    type: string,
    image: string,
    name: string,
    params: {
        ip: string,
        username: string,
        password: string
    }
}