import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../Model/userModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  termoBuscado : string = ''
  tipoSelecionado: string=''

  users = [
    new User('Charmander', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png','Fogo','Chama'),
    new User('Venusauro', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png','Grama','Crescer Demais'),
    new User('Squirtle', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png','Água','Torrente'),
    new User('Caterpie', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png','Bug','Escudo Poeira'),
    new User('Kakuna', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png','Bug','Pele Derramada'),
    new User('Pidgey', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png','Normal','Olho Aguçado'),
    new User('Arbok', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png','Tóxico','Intimidar'),
    new User('Pikachu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png','Elétrico','Estático'),
    new User('Nidoqueen', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png','Tóxico','Ponto Venenoso'),
    new User('Clefairy', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png','Fada','Charme fofo'),
 
  ]
}
