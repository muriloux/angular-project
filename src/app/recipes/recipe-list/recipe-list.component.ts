import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Pudim de leite',
      "This is a dummy recipe, don't worry",
      'https://s2.glbimg.com/z2JiB6nwO_XITDhQksL2uiAhic0=/0x0:984x765/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2020/D/m/r8XAmWTcuRAzTRMBJZ1A/pudim-de-leite-condensado.jpg'
    ),
  ];
}
