import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  constructor(private http: Http) { }
  form: FormGroup;

  @Output() recipe = new EventEmitter<any>();

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
    });
  }
  onAddRecipe() {
    console.log(this.form.value);
    this.recipe.emit(this.form.value);
    this.http.post(`${environment.apiUrl}/recipes`, this.form.value).subscribe();
    this.form.reset();
    this.form.controls['title'].setValidators(null);
    this.form.controls['comment'].setValidators(null);
  }

}
