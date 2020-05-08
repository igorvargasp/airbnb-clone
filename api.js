const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
        var paginaFinal =12;
        var paginaAtual = 6;

          

          window.addEventListener('load', ()=> {
            fetch(url).then((response)=>{
              response.json().then((data)=>{
                
              
               document.getElementById("prox").onclick = function(){
                 
                while(paginaAtual < paginaFinal){

                  const pai = document.querySelector(".card-deck")
                  let elemento = document.createElement("div")
                  elemento.setAttribute("class",".card")    
                  elemento.classList.add("col-3","ml-5","mb-5") 


                  pai.appendChild(elemento)


                  let img = document.createElement("img")
                  img.setAttribute("class",".card-img-top ")
                  img.style.height= "300px"
                  img.style.width = "452px"
                  img.classList.add("rounded-top");

                                  
                  img.src = data[paginaAtual].photo
                  elemento.appendChild(img)

                  let cardBody = document.createElement('div')
                  cardBody.setAttribute("class",".card-body")
                  cardBody.style.width="452px"
                  cardBody.classList.add("border","rounded-bottom","shadow")
                  elemento.appendChild(cardBody)

                  let propiedade = document.createElement("p")
                  propiedade.setAttribute("class",".card-text")
                  propiedade.textContent = data[paginaAtual].property_type
                  cardBody.appendChild(propiedade)

                  let price = document.createElement("h6")
                  price.setAttribute("class",".card-subtitle")
                  price.textContent = "Preço: "+data[paginaAtual].price
                  cardBody.appendChild(price)
                  paginaAtual++
              }
                  paginaFinal+=6
                  
                
                }

                let page = 6
                console.log("pagina "+paginaFinal)
                for(i = 0; i< page; i++){

                const pai = document.querySelector(".card-deck")
                let elemento = document.createElement("div")
                elemento.setAttribute("class",".card")    
                elemento.classList.add("col-3","ml-5","mb-5") 


                pai.appendChild(elemento)
                

                let img = document.createElement("img")
                img.setAttribute("class",".card-img-top ")
                img.style.height= "300px"
                img.style.width = "452px"
                img.classList.add("rounded-top");
               
                                
                img.src = data[i].photo
                elemento.appendChild(img)

                let cardBody = document.createElement('div')
                cardBody.setAttribute("class",".card-body")
                cardBody.style.width="452px"
                cardBody.classList.add("border","rounded-bottom","shadow")
                elemento.appendChild(cardBody)

                let propiedade = document.createElement("p")
                propiedade.setAttribute("class",".card-text")
                propiedade.textContent = data[i].property_type
                propiedade.classList.add("ml-2")
                cardBody.appendChild(propiedade)

                let price = document.createElement("h6")
                price.setAttribute("class",".card-subtitle")
                price.textContent = "Preço: "+data[i].price
                price.classList.add("ml-2")
                cardBody.appendChild(price)
                

                }

              })
            })
          });


        