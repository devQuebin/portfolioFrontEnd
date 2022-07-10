export class user {
    id?: number;
    nombre: String;
    apellido: String;
    titulo: String;
    about: String;
    foto: String;

    constructor(nombre: String, apellido: String, titulo: String, about: String, foto: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.about = about;
        this.foto = foto;
    }
    
}