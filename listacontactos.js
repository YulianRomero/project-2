// lista de contactos
let listaContactos =[
    {id: 0,
    nombre: "Yulian Ferley",
    apellido: "Rodriguez Romero",
    telefono: 3043418144,
    ciudad: "SanGil",
    direccion: "Cra7#28-25"},

    {id: 1,
    nombre: "Yesica Alejandra",
    apellido: "Martinez Gomez",
    telefono: 3015189635,
    ciudad: "Bucaramanga",
    direccion: "Cra25#11-29"},
    {id: 2,
     nombre: "Laura Alejandra",
     apellido: "Silva Lopez",
     telefono: 3216557448,
     ciudad: "Medellin",
     direccion: "Cll 51#33-610"},
];

// funcion para añadir un nuevo contacto a la lista
function agregarContacto(
    id,
nombre,
apellido,
telefono,
ciudad,
 direccion,
){
listaContactos.push({
    id: id,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    ciudad: ciudad,
    direccion: direccion,
});}

// funcion para borrar contacto de la lista
function borrarContacto(id){
   let  Indice = listaContactos.findIndex((contacto) => contacto.id === id);
   if (Indice !== -1){
    listaContactos.splice(Indice, 1);
   }
}
// funcion para imprimir en consola la lista
function imprimirContactos(){
    console.log (listaContactos);
}
// agregar un nuevo contacto a la lista
agregarContacto(
    "3",
    "Pedro Pablo",
    "Ramirez Duque",
    "3142035069",
    "Bogota",
    "Cra 88# 54-99 apt 201");
    // borrar contacto de la lista
    borrarContacto(2);
    // imprimir lista actualizada
    imprimirContactos();

