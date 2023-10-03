interface Word{
    word:string;
    phonetic?: string;
    phonetics: Phonetic[];
    meanings: Meanings[];
    sourceUrls: string[];
}


interface Definitions{
    definition: string;
    synonyms?: string[];
    antonyms?: string[]
}

export interface Meanings{
    partOfSpeech: string;
    definitions: Definitions[]
    synonyms?: string[];
    antonyms?: string[]
}

interface Phonetic{
    text:string;
    audio:string
}
