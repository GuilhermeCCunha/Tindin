    export interface Photo {
        name: string;
        url: string;
        _id: string;
    }

    export interface Video {
        type: string;
        url: string;
        _id: string;
    }

    export interface Game {
        _id: string;
        title: string;
        description: string;
        photos: Photo[];
        genres: string[];
        platforms: string[];
        tags: string[];
        rating: number;
        totalVotes: number;
        videos: Video[];
        createdAt: Date;
        updatedAt: Date;
        __v: number;
        mediumPrice: number;
        releaseYear: number;
        resume: string;
        highlight?: boolean;
    }

    export interface RootObject {
        games: Game[];
        totalSize: number;
    }



