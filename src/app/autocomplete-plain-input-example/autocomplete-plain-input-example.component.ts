import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';


/**
 * @title Plain input autocomplete
 */
@Component({
  selector: 'autocomplete-plain-input-example',
  templateUrl: 'autocomplete-plain-input-example.component.html',
  styleUrls: ['autocomplete-plain-input-example.component.css'],
})
export class AutocompletePlainInputExampleComponent implements OnInit {
  control = new FormControl('');
  sjogos: string[] = ['Plague tale: Inocence','Hollow Knight','Naruto Ultimate Ninja Storm', "Uncharted: Drake's Fortune", 'To The Moon','Ori and the Will of the Wisps','The Legend of Zelda: The Minish Cap',  'Jak X: Combat Racing', 'Finding Paradise', 'Portal 2'  ];
  /*A lista de jogos com detalhes retirados da API aparece no console
   do navegador */
  
  filteredSjogos: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredSjogos = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.sjogos.filter(sjogo => this._normalizeValue(sjogo).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}