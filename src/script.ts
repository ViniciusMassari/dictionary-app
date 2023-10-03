import './styles.css'
import './index.html'
import { Word } from './types'
import { setWordPhoneticResultHTML, setWordResultHTML } from './utils/htmlManipulation'






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
    const word: HTMLElement | null = document.querySelector('.word');
    const audio: HTMLAudioElement | null =  document.querySelector('audio');
    const footer:HTMLElement | null = document.querySelector('footer');
    const wordData = data[0];
const meaningResult: HTMLElement | null = document.querySelector('.meaning-result')
    const {meanings} = wordData;

    if (meaningResult) {
    meaningResult.innerHTML = ''
    }

    
if (data && isWordData(wordData)) {

    setWordResultHTML(word,wordData)
    setWordPhoneticResultHTML(audio, wordData)

    
// meaning
if (meaningResult) {
    meaningResult.innerHTML = `<p>${wordData.word}</p>`
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

// search handling
async function handleSearch(cacheSearch?:string) {
    if (input) {
        let search:string;
        cacheSearch ? search = cacheSearch : search = input.value
        localStorage.setItem('search',search )
    }
    const searchError = document.querySelector('.searchError')
    const form = document.getElementById('searchForm')
    const search = cacheSearch ? cacheSearch : input?.value
    const res =await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
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
    handleSearch(previousSearch)
}




search?.addEventListener('click', (e: Event) =>{
    e.preventDefault()
    handleSearch()
})



