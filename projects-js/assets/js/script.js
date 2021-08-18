

//* HTML Fragment - Looping
//TODO diable to run script
// const students = [
//     { id: 1, name: "Sandrian" },
//     { id: 2, name: "Hafid" },
//     { id: 3, name: "Faiz" },
//     { id: 4, name: "Fikri" },
//     { id: 5, name: "Yogi" },
// ];

// const el = `<div>
//                 <h1>Students List</h1>
//                 <ul>
//                     ${students.map(student => `<li><a href="">${student.name}</a></li>`).join('')}
//                 </ul>
//             </div>`;
// document.body.innerHTML = el;


//* HTML Fragment - Ternary
//TODO diable to run script

// const songs = [
//     {
//         singer: 'Mita',
//         title: 'Kamu',
//         feat: 'Rian'
//     },
//     {
//         singer: 'Rian',
//         title: 'Dia',
//         feat: 'Mita'
//     }
// ]

// const ul =
//     `<div>
//         ${songs.map(song => {
//         return `<ul>
//                     <li>Singer : ${song.singer}</li>                    
//                     <li>Songs : ${song.title}</li>
//                     ${song.feat ? `<li>Feats ${song.feat}</li>` : ''}                    
//                 </ul>`
//     }).join('')}
//     </div>`;

// document.body.innerHTML = ul;

const profile = {
    name: 'sandrian syafri',
    age: 23,
    pelatihan: [
        'laravel',
        'vue',
        'js'
    ]
}

const cetakPelatihan = function (pelatihan) {
    return `<ul>
        ${pelatihan.map(p => {
        return `<li>${p}</li>`
    }).join('')}
    </ul>`
}

const el = `<div>
    <ul>
        <li>
            ${profile.name}
        </li>
    </ul>
    ${cetakPelatihan(profile.pelatihan)}
</div>`

document.body.innerHTML = el;