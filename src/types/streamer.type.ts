export type StreamerDataType = {
    userID: string;
    displayName: string;
    picture: string;
    score: number;
    up: boolean;
}

export type StreamerCoPropType = {
    serialNo: number;
    userID: string;
    displayName: string;
    picture: string;
    score: number;
    style: { [key: string]: string };
}