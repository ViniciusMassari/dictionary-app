import { Word } from "../types"

export function setWordResultHTML(wordResultContainer: HTMLElement | null, wordData: Word): void{
    wordResultContainer?.innerHTML ? wordResultContainer.innerHTML = ` <div><h2>${wordData.word ?? ""}</h2>
                <span class=" purple">${wordData.phonetic ?? ""}</span> </div><div class="audio">
                    <i class="bi bi-play-fill" id="play"></i>
                    <audio>
                    </audio>
                </div> ` : ''
}

export function setWordPhoneticResultHTML(audioElement: HTMLAudioElement | null, wordData: Word): void {
        wordData.phonetics.forEach(phonetic =>{
    const extension = phonetic.audio.substring(phonetic.audio.lastIndexOf('.') + 1)
    console.log(extension);
    
    if (audioElement && phonetic.audio !== '') {
        audioElement.innerHTML = `<source src="${phonetic.audio}" type="audio/mpeg">
`}
})
}