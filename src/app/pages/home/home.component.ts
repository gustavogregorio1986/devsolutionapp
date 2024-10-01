import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../footer/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

   imagemEmpresa = 'https://tse4.mm.bing.net/th?id=OIP.O3tnhk070tgDPVeNufsZ3QHaD4&pid=Api&P=0&h=180'
   empresaAt = 'empresa'
}
