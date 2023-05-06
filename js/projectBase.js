const project = [
    {
        id: 1,
        codigo:
        `<div class="card">
            <div class="box">
                <div class="fullpage-wrapper">
                    <div class="reactor-container">
                        <div class="tunnel circle abs-center"></div>
                        <div class="core-wrapper circle abs-center"></div>
                        <div class="core-outer circle abs-center"></div>
                        <div class="core-inner circle abs-center"></div>
                        <div class="coil-container">
                            <span class="coil" style="--i:0"></span>
                            <span class="coil" style="--i:1"></span>
                            <span class="coil" style="--i:2"></span>
                            <span class="coil" style="--i:3"></span>
                            <span class="coil" style="--i:4"></span>
                            <span class="coil" style="--i:5"></span>
                            <span class="coil" style="--i:6"></span>
                            <span class="coil" style="--i:7"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
    },
    {
        id: 2,
        codigo:
        `<div class="card">
            <div class="box">
                <div class="circleDots">
                    <div class="ring"></div>
                    <div class="ring"></div>
                    <div class="ring"></div>
                </div>
            </div>
        </div>`,
    },
    {
        id: 3,
        codigo: 
        `<div class="card">
            <div class="box">
                <div class="effectClock">
                    <span style="--i:0"><i></i></span>
                    <span style="--i:1"><i></i></span>
                    <span style="--i:2"><i></i></span>
                    <span style="--i:3"><i></i></span>
                    <span style="--i:4"><i></i></span>
                    <span style="--i:5"><i></i></span>
                    <span style="--i:6"><i></i></span>
                    <span style="--i:7"><i></i></span>
                    <span style="--i:8"><i></i></span>
                    <span style="--i:9"><i></i></span>
                    <span style="--i:10"><i></i></span>
                    <span style="--i:11"><i></i></span>
                    <span style="--i:12"><i></i></span>
                    <span style="--i:13"><i></i></span>
                    <span style="--i:14"><i></i></span>
                    <span style="--i:15"><i></i></span>
                </div>
            </div>
        </div>`,
    },
    {
        id: 4,
        codigo: 
        `<div class="card">
            <div class="box">
                <div class="cont">
                    <div class="first side"><span></span></div>
                    <div class="second side"><span></span><span></span></div>
                    <div class="third side"><span></span><span></span></div>
                    <div class="fourth side"><span></span></div>
                    <div class="fifth side"><span></span><span></span></div>
                    <div class="sixth side"><span></span></div>
                </div>
            </div>
        </div>`,
    },
    {
        id: 5,
        codigo: 
        `<div class="card">
            <div class="box">
                <div class="loader">
                    <span style="--i:1"></span>
                    <span style="--i:2"></span>
                    <span style="--i:3"></span>
                    <span style="--i:4"></span>
                    <span style="--i:5"></span>
                    <span style="--i:6"></span>
                    <span style="--i:7"></span>
                    <span style="--i:8"></span>
                    <span style="--i:9"></span>
                    <span style="--i:10"></span>
                    <span style="--i:11"></span>
                    <span style="--i:12"></span>
                </div>
            </div>
        </div>`,
    },
    {
        id: 6,
        codigo: 
        `<div class="card">
            <div class="box">
                <div class="loader2">
                    <span style="--i:1;"></span>
                    <span style="--i:2;"></span>
                    <span style="--i:3; --clr: #0c25b3;"></span>
                    <span style="--i:4;"></span>
                    <span style="--i:5;"></span>
                    <span style="--i:6; --clr: #0c25b3;"></span>
                    <span style="--i:7;"></span>
                    <span style="--i:8;"></span>
                    <span style="--i:9; --clr: #0c25b3;"></span>
                    <span style="--i:10;"></span>
                    <span style="--i:11;"></span>
                    <span style="--i:12; --clr: #0c25b3;"></span>
                </div>
            </div>
        </div>`,
    },
    {
        id: 7,
        codigo:
        `<div class="card">
            <div class="box">
                <div class="sky">
                    <div class="sun"></div>
                    <div class="moon"></div>
                </div>
            </div>
        </div>`,
    },
];

const listContainer = document.querySelector("#container");

function render(project){

    let list = '';

    if(project.length <= 0){
        list += `<div id="no-project">Nenhum projeto encontrado</div>`
    }else{
        project.forEach((cod, index) => {
            list+= `${cod.codigo}`
        })
    }

    listContainer.innerHTML = list;
};

render(project);