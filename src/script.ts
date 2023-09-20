import './styles.css'
import './index.html'



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

interface Word{
    word:string;
    phonetic?: string;
    phonetics: Phonetic[];
    meanings: Meanings[];
    sourceUrls: string[];
}

function isWordData(data: unknown): data is Word {
    if (data && typeof data === 'object' && 'word' in data) {
        return true
    } else{
        return false
    }
}

const ACTIVE_CLASS:string = 'active'
const DARK_CLASS: string = 'dark';


// Theme

const slide = document.querySelector('.slide')

function darkThemeVerify() {
    if (window.matchMedia("(max-width: 600px)") && !document.body.classList.contains('dark')) {
        const circle = document.querySelector('.circle')
        circle?.classList.add(ACTIVE_CLASS)
        slide?.classList.add(ACTIVE_CLASS)
     document.body.classList.add(DARK_CLASS)
    } 
}
darkThemeVerify()

function toggleDarkTheme(e:Event) {
    e.preventDefault()
    const circle = document.querySelector('.circle')
    circle?.classList.toggle(ACTIVE_CLASS)
    slide?.classList.toggle(ACTIVE_CLASS)
    document.body.classList.toggle(DARK_CLASS)
}

slide?.addEventListener('click',toggleDarkTheme)


// Font-selector

const fontSelector = document.querySelector('.selector')
const fontsList = document.querySelectorAll('.fonts li')



function toggleFontSelector(e: Event) {
      const fonts = document.querySelector('.fonts')
    fonts?.classList.toggle(ACTIVE_CLASS)
    
}

function toggleFont(e:Event) {
    const font:HTMLElement | null = document.querySelector('.selected-font')
    if (e.target instanceof HTMLElement && font) {
        document.body.style.fontFamily = e.target.innerText
        fontSelector?.classList.remove(ACTIVE_CLASS)
        font.innerText = e.target.innerText
    }
}

fontSelector?.addEventListener('click', toggleFontSelector)

fontsList?.forEach(li =>{
    li.addEventListener('click', toggleFont)
})


// Search

const input:HTMLInputElement | null = document.querySelector('input');
const search = document.querySelector('#search')

function handleWordResult(data: Word[]) {
    const word = document.querySelector('.word');
    const audio: HTMLAudioElement | null =  document.querySelector('audio');
    const footer = document.querySelector('footer');
    const wordData = data[0];
const meaningResult: HTMLElement | null = document.querySelector('.meaning-result')
    const {meanings} = wordData;

if (meaningResult) {
    meaningResult.innerHTML = ''
}

    
if (data && isWordData(wordData)) {
    // word
    word?.innerHTML ? word.innerHTML = ` <h2>${wordData.word ?? ""}</h2>
                <span class=" purple">${wordData.phonetic ?? ""}</span>` : ''
// audio
wordData.phonetics.forEach(phonetic =>{
    const extension = phonetic.audio.substring(phonetic.audio.lastIndexOf('.') + 1)
    if (audio && phonetic.audio !== '') {
        audio.innerHTML = `<source src="${phonetic.audio}" type="audio/${extension === 'mp3' ? 'mpeg' : extension}">
`}
})
// meaning
if (meaningResult) {
    meaningResult.innerHTML = "Hello world"
meanings.forEach(mean =>{
    meaningResult.innerHTML += ` 
    <div class="partOfSpeech">
                <p>${mean.partOfSpeech}</p>
                <div class="bar"></div>
            </div>
            <p>Meaning</p>
            <ul class="definitions-list">
            ${mean.definitions.map((def) =>{
              return  `<li>${def.definition}
              </li>
              `
            }).join('')}
            </ul>`
})
}  
}
    
    
// footer

if (footer) {
    footer.innerHTML = `
     <p>Source</p>
        <a target="_blank" href="${wordData.sourceUrls[0]}">${wordData.sourceUrls[0]}</a>`
}

}


async function handleSearch(e:Event,) {
    e.preventDefault()
    if ( input) {
        localStorage.setItem('search', input.value)
    }
    const searchError = document.querySelector('.searchError')
    const form = document.getElementById('searchForm')
    const res =await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input?.value}`)
    
    if (res.status === 404) {
          form?.classList.add('error')
        searchError?.classList.add(ACTIVE_CLASS)
    } else{
         form?.classList.remove('error')
        searchError?.classList.remove(ACTIVE_CLASS)
        const resJson = await res.json()
        handleWordResult(resJson)
    }
}

async function onAdvanceFetch(search:string) {
 const searchError = document.querySelector('.searchError')
    const form = document.getElementById('searchForm')
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
    
    if (res.status === 404) {
          form?.classList.add('error')
        searchError?.classList.add(ACTIVE_CLASS)
    } else{
         form?.classList.remove('error')
        searchError?.classList.remove(ACTIVE_CLASS)
        const resJson = await res.json()
        handleWordResult(resJson)
    }
}


const previousSearch = localStorage.getItem('search')
if (previousSearch !== undefined && previousSearch) {
    onAdvanceFetch(previousSearch)
}




search?.addEventListener('click', handleSearch)


