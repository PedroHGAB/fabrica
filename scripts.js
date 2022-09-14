let dados = [];
  const elementoH1 = document.querySelector("h1");
  const botao = document.querySelector('btn-azul'); //const Botão

  elementoH1.innerText = `${dados.length} monstros`;
  
  fetch('https://jsonplaceholder.typicode.com/users',{
    method: "GET",
  })
    .then((response) => {
        /*if(response.status === 200) alert('Sucesso!')
        else alert('ALGO DEU ERRADO!')*/
        return response.json();
    })
    .then((json) => {
        dados = json.slice(0, 5);
        elementoH1.innerText = `${dados.length} monstros`;

    for (let objeto of dados) {
        const elemtArticle = document.createElement("article");
        elemtArticle.classList.add("monstros");
    
        elemtArticle.innerHTML = `
      <img src="https://robohash.org/${objeto.id}?set=set2" alt="${objeto.name}" />
        <div>
          <h2>${objeto.name}</h2>
          <p>${objeto.email}</p>
        </div>
      `;

        elementoH1.insertAdjacentElement("afterend", elemtArticle);
        }
    });

  //BOTÃO DE REMOVER->
    botao.addEventListener("click", () => {
        let articles = document.querySelectorAll('article');
        for (let i = 0; i < articles.length; i++) {
            articles[i].remove();
        }
        dados = [];
        elementoH1.innerText = `${dados.length} monstros`;
    });

    async function rederizar(){
        await fetch('https://jsonplaceholder.typicode.com/users');
    } //maneira de se comunicar com API

    /*const renderizar = async () =>{

    } outra maneira de se comunicar com API*/

    renderizar();

    console.log("primeiro");



    /*
    .then((json) => console.log(json));

    let funcao = (response) => {
        console.log(response)
        return response
    }

    function response (response){
        console.log(response)
        return response
    }*/

  /*const elementoH1 = document.querySelector("h1");
  
  const elemtArticle = document.createElement("article");
  elemtArticle.classList.add("monstros");
  
  elemtArticle.innerHTML = `
  <img src="https://robohash.org/5?set=set2" alt="monstro" />
    <div>
      <h2>nome</h2>
      <p>email</p>
    </div>
  `;  

elementoH1.insertAdjacentElement("afterbegin", elementoArticle); /*Depois do H1 tem um Article*/


/*for(let i = 0; i < dados.length; i++){
    const elementArticle = document.createElement("article");
    elementArticle.classList.add("monstro");
    console.log('for loop');
}*/

/*elementArticle.innerText = "teste";*/

/*elementoH1.appendChild(elementoArticle)
console.log(elementoArticle)*/
/*const elementoH1 = document.querySelector("h1")
console.log(elementoH1)*/