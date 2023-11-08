import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
export interface Natural{
  image: string;
  itemName: string;
  id: number;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isHovered: boolean = false;
  myControl = new FormControl('');
  options: string[] = ['Cocunut Oil Soap', 'Oil', 'Herbal Powders', 'Spices', 'Herbals', 'Incence', 'Grains'];
  filteredOptions!: Observable<string[]>;

  items: Natural[] = [
    {image: 'assets/image/offer.png', itemName: "Offers", id:1},
    {image: 'assets/image/soap.png', itemName: "Natural Soaps", id:2},
    {image: 'assets/image/oil.png', itemName: "Natual Oils", id:3},
    {image: 'assets/image/powders.png', itemName: "Natural Powders", id:4},
    {image: 'assets/image/spices.png', itemName: "Spices", id:5},
    {image: 'assets/image/herbal.png', itemName: "Herbals", id:6},
    {image: 'assets/image/incense.png', itemName: "Incense", id:7},
    {image: 'assets/image/grains.png', itemName: "Grains", id:8},
  ];
  ngOnInit(): void{
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
