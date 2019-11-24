
export interface GetPhotosModule{
    "id": String,
    "tn_src": String
}

export interface ViewPhotoModule{
    "description": String,
    "src": String
}

export interface PhotoDetail{
    "albumId": String,
    "cover": Boolean,
    "create_date": String,
    "parsed_date": String,
    "description": String,
    "event": String,
    "src":String
}