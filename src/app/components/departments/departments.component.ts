import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../interfaces/department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  departments!: Department[];

  constructor(
    private departmentsService: DepartmentsService,
  ) { }

  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
  }

}
