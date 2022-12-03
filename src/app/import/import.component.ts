import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RepositoryService} from "../services/repository.service";
import {first} from "rxjs";

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  importRepositoryForm: FormGroup = this.formBuilder.group({
    organization: ['', Validators.required],
    repository: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private repositoryService: RepositoryService) {
  }

  ngOnInit(): void {
  }

  import() {
    this.repositoryService.import(this.importRepositoryForm.get('organization')?.value, this.importRepositoryForm.get('repository')?.value)
      .pipe(first())
      .subscribe(() => {
          alert("Imported successfully")
        },
        error => {
          alert(error)
        })
  }
}
