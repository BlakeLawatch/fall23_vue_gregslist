export class House {
    constructor(data) {
        this.id = data.id || data._id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creator = data.creator
        this.creatorId = data.creatorId
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)

    }
}

const houses = {
    "_id": "6525d4b732075d754277178b",
    "bedrooms": 1,
    "bathrooms": 1,
    "levels": 1,
    "imgUrl": "https://images.unsplash.com/photo-1611622295630-7839220cf0e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "year": 1899,
    "price": 50000,
    "description": "It doesn't have a door only a window.",
    "creatorId": "6525cefac22ddff8178f8c70",
    "createdAt": "2023-10-10T22:48:23.198Z",
    "updatedAt": "2023-10-10T22:48:23.198Z",
    "__v": 0,
    "creator": {
        "_id": "6525cefac22ddff8178f8c70",
        "name": "bobbarker",
        "picture": "https://s.gravatar.com/avatar/a547c8b6f16a4d12ea4e9b06e6eb8b8e?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbo.png",
        "id": "6525cefac22ddff8178f8c70"
    },
    "id": "6525d4b732075d754277178b"
}