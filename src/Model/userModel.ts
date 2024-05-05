export class User {
    //propriedades da classe
    name: string;
    image: string;
    type: string;
    ability: string;


    //construtor
    constructor(name: string, image: string, type: string,ability:string){
        this.name = name;
        this.image = image;
        this.type = type;
        this.ability = ability;
    }
}