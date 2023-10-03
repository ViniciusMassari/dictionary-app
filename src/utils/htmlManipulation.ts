import { Word } from "../types"

export function setWordResultHTML(wordResultContainer: HTMLElement | null, wordData: Word): void{
    wordResultContainer?.innerHTML ? wordResultContainer.innerHTML = ` <h2>${wordData.word ?? ""}</h2>
                <span class=" purple">${wordData.phonetic ?? ""}</span>` : ''
}

export function setWordPhoneticResultHTML(audioElement: HTMLAudioElement | null, wordData: Word): void {
        wordData.phonetics.forEach(phonetic =>{
    const extension = phonetic.audio.substring(phonetic.audio.lastIndexOf('.') + 1)
    if (audioElement && phonetic.audio !== '') {
        audioElement.innerHTML = `<source src="${phonetic.audio}" type="audio/${extension === 'mp3' ? 'mpeg' : extension}">
`}
})
}