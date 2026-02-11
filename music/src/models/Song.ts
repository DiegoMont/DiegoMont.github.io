export default interface Song {
    title: string;
    cloudDir: string;
    recordings: {
        name: string;
        score: string;
        speeds: {
            name: string;
            audio: string;
        }[]
    }[]
}

