export declare interface Speaker {
    "id": number,
    "name": string,
    "job": string,
    "url": string
}

export declare interface Talk {
    title: string,
    description: string,
    speakers: Speaker[],
    date: Date
}
