import {Component, OnInit} from '@angular/core';
import {RepositoryService} from "../services/repository.service";
import {ToastrService} from "ngx-toastr";
import {first} from "rxjs";
import {Repository} from '../_models/repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repositories: Repository[] = [];
  loading: boolean = false;

  constructor(private repositoryService: RepositoryService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.list()
  }

  list() {
    this.loading = true
    this.repositoryService.list()
      .pipe(first())
      .subscribe((response) => {
          this.loading = false
          this.repositories = response
          console.log(response)
        },
        error => {
          this.loading = false
          console.log(error)
          this.toastr.error(error.error, "Error")
        })
  }
}
