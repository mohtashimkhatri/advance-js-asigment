var mobile = {
    sumsung:[
        {
            name:'sumsungA12',
            camera:'100px',
            memory:'2gb'
        },
        {
            name:'SamsungGalaxyA04',
            camera:'20px',
            memory:'g4b'
        },
        {
            name:'SamsungGalaxyA04',
            camera:'350px',
            memory:'6gb'
        },
    ],
    vivo:[
        {
            name:'vivoy20',
            camera:'250px',
            memory:'4gb'
        },
        {
            name:'vivoy12a',
            camera:'105px',
            memory:'4gb'
        },
        {
            name:'vivoS1',
            camera:'300',
            memory:'10gb'
        },
    ],
    oppo:[
        {
            name:'oppoa57',
            camera:'800px',
            memory:'12gb'
        },
        {
            name:'oppof19',
            camera:'900',
            memory:'14gb'
        },
        {
            name:'oppoA53',
            camera:'600',
            memory:'16gb'
        },
    ],
    realme:[
        {
            name:'realmeC53',
            camera:'500px',
            memory:'24gb'
        },
        {
            name:'reslmeC35',
            camera:'600px',
            memory:'9gb'
        },
        {
            name:'realmeC2',
            camera:'500px',
            memory:'25gb'
        },
    ]
    }

var input = document.getElementById('myInput');
input.addEventListener('keyup', (e) =>{
var company = input.value;
// console.log(B)

var ul = document.getElementById('ul')
ul.innerHTML='';
for(var i=0; i < mobile[company].length; i++){
ul.innerHTML += `<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle margin" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
${mobile[company][i].name}
</button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <li><a class="dropdown-item" href="#">Camera : ${mobile[company][i].camera}</a></li>
  <li><a class="dropdown-item" href="#">Memory : ${mobile[company][i].memory}</a></li>
</ul>
</div>`
}
input.value = ''
    }
)


