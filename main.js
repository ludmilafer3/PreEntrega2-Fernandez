alert("BIENVENIDOS A NUESTRA LIBRERIA");
let pregunta = prompt("Deseas comprar un libro").toLocaleLowerCase

const libros = [
    {id: 1, nombre:"Las hijas de la criada" , precio:15000 , genero: "ficcion", paginas: 480 },
    {id: 2, nombre:"Las hijas de la criada" , precio:150 , genero: "ficcion", paginas: 480 },
    {id: 3, nombre:"Las hijas de la criada" , precio:10000 , genero: "ficcion", paginas: 480 },
    {id: 4, nombre:"Las hijas de la criada" , precio:20000 , genero: "ficcion", paginas: 480 }
]

function comprar(){
    while (pregunta != "no"){
        const precio = Number(prompt("Cual es el precio minimo que deseas pagar"));
        const filtro = libros.filter((item) =>  item.precio > precio);

        filtro.forEach((item) =>{
            alert(`
            id: ${item.id}
            nombre: ${item.nombre}
            precio: ${item.precio}
            genero: ${item.genero}
            paginas: ${item.paginas}
            `)
        })

        let pregunta2 = prompt("Quieres comprar algunos de estos productos?").toLowerCase; 
        
            if(pregunta2 === "si"){

                let pregunta3 = prompt("que id tiene el producto que deseas comprar?");
                const libroComprado = libros.find((item) => item.id === pregunta3); 

                if (libroComprado){
                    alert(`id: ${item.id}
                    nombre: ${item.nombre}
                    precio: ${item.precio}
                    genero: ${item.genero}
                    paginas: ${item.paginas}`)
                }

                const totalCarrito = libros.reduce((acum,item) => acum + item.precio, 0);
                alert(`el valor de tu compra es de ${totalCarrito}`)
            }

    pregunta = prompt("Deseas comprar un libro").toLocaleLowerCase
    }
}

comprar()