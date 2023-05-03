const project = [
    {
        
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