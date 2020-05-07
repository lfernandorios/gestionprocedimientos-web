import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart(){
    return [{
      name: 'Eps Sura',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Coomeva',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Medimás',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'Cruz Blanca',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Sanitas',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards() {
    return [71, 78, 39 , 66];
  }

  pieChart() {
    return [{
      name: 'Ortopedia',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Neurología',
      y: 11.84
    }, {
      name: 'Oncología',
      y: 10.85
    }, {
      name: 'Urología',
      y: 4.67
    }, {
      name: 'Hematología',
      y: 4.18
    }, {
      name: 'Endocrinología',
      y: 1.64
    }, {
      name: 'Dermatología',
      y: 1.6
    }, {
      name: 'Cardiología',
      y: 1.2
    }, {
      name: 'Urología',
      y: 2.61
    }];
  }
}
