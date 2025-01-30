const data = []

function add(todo, date){
    data.push({
        todo : todo,
        date : date,
        isdo : false
    })
}

let indexA = 0
let indexB = 0
let index = 0

document.body.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()
    let what = document.querySelector('.apa').value
    let when = document.querySelector('.kpn').value
    document.querySelector('.apa').value = ""
    document.querySelector('.kpn').value = ""
    indexA = indexA + 1
    if(indexA > 0){
        document.querySelector('.no').setAttribute('hidden', '')
    }

    add(what, when)
    let app = document.createElement('div')
    app.innerHTML = `
    <div class="list flex justify-between items-center bg-white outline-none border-2 border-solid border-teal-400 rounded-lg py-4 px-5">
        <div class="left">
            <h1 class="font-medium text-xl">${data[index].todo}</h1>
            <h1 class="font-light text-sm">${data[index].date}</h1>
        </div>
        <div class="right">
            <button data-id="${index}" class="outline-none border-2 border-solid border-teal-400 p-2 rounded-full text-teal-400 flex justify-center items-center hover:bg-teal-50 transition-all ease-in-out duration-200 cek">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>                      
            </button>
        </div>
    </div>
    `

    document.querySelector('input').classList.remove("bg-teal-50")
    document.querySelector('input[type="date"]').classList.remove("bg-teal-50")

    index++
    document.querySelector('.do').appendChild(app)

    
})

document.addEventListener('click', function(event) {
    let right = document.createElement('div')
    right.classList.add('right', 'flex', 'gap-2')
    right.innerHTML = `
        <button class="ret outline-none border-2 border-solid border-teal-400 p-2 rounded-full text-teal-400 flex justify-center items-center hover:bg-teal-50 transition-all ease-in-out duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
              </svg>                      
        </button>
        <button class="del outline-none border-2 border-solid border-teal-400 p-2 rounded-full text-teal-400 flex justify-center items-center hover:bg-teal-50 transition-all ease-in-out duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>                      
        </button>
    `

    let button = event.target.closest('.cek')
    if (button) {
        let parentDiv = button.closest('.list')
        parentDiv = parentDiv.parentElement
        parentDiv.remove()
        let left = parentDiv.querySelector('.left')
        let newdone = document.createElement('div')
        newdone.classList.add('dn')
        newdone.innerHTML = `
        <div class="list flex justify-between items-center bg-white outline-none border-2 border-solid border-teal-400 rounded-lg py-4 px-5">
            ${left.outerHTML}
            ${right.outerHTML}
        </div>
        `

        indexA = indexA - 1
        if(indexA > 0){
            document.querySelector('.no').setAttribute('hidden', '')
        }
        else{
            document.querySelector('.no').removeAttribute('hidden')
        }

        indexB = indexB + 1
        if(indexB > 0){
            document.querySelector('.nod').setAttribute('hidden', '')
        }
        else{
            document.querySelector('.nod').removeAttribute('hidden')
        }

        document.querySelector('.done').appendChild(newdone)
    }
});

document.addEventListener('click', function(event) {
    let butret = event.target.closest('.ret')
    let parret = butret.closest('.dn')
    parret.querySelector('.list')
    let change_r = parret.querySelector('.list').querySelector('.right')
    change_r.innerHTML = `
    <button data-id="${index}" class="outline-none border-2 border-solid border-teal-400 p-2 rounded-full text-teal-400 flex justify-center items-center hover:bg-teal-50 transition-all ease-in-out duration-200 cek">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>   
    </button>
    `

    indexA = indexA + 1
    if(indexA > 0){
        document.querySelector('.no').setAttribute('hidden', '')
    }
    else{
        document.querySelector('.no').removeAttribute('hidden')
    }
    
    indexB = indexB - 1
    if(indexB > 0){
        document.querySelector('.nod').setAttribute('hidden', '')
    }
    else{
        document.querySelector('.nod').removeAttribute('hidden')
    }

    document.querySelector('.do').appendChild(parret)
})

document.addEventListener('click', function(event) {
    let butdel = event.target.closest('.del')
    let pardel = butdel.closest('.dn')
    pardel.remove()

    indexB = indexB - 1
    if(indexB > 0){
        document.querySelector('.nod').setAttribute('hidden', '')
    }
    else{
        document.querySelector('.nod').removeAttribute('hidden')
    }
})


document.querySelector('input').addEventListener('input', function(event) {
    if (event.target.value.length > 0) {
        event.target.classList.add("bg-teal-50")
    } else {
        event.target.classList.remove("bg-teal-50");
    }
});

document.querySelector('input[type="date"]').addEventListener('input', function(event) {
    if (event.target.value.length > 0) {
        event.target.classList.add("bg-teal-50")
    } else {
        event.target.classList.remove("bg-teal-50");
    }
});