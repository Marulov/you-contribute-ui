import {Component, OnInit} from '@angular/core';
import {Issue} from "../_models/issue";
import {ToastrService} from "ngx-toastr";
import {first} from "rxjs";
import {IssueService} from "../services/issue.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  issues: Issue[] = [];
  loading: boolean = false;

  constructor(private issueService: IssueService,
              private toastr: ToastrService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.list(params['id'])
    })
  }

  list(repositoryId: number) {
    this.loading = true
    this.issueService.list(repositoryId)
      .pipe(first())
      .subscribe((response) => {
          this.loading = false
          this.issues = response
        },
        error => {
          this.loading = false
          this.toastr.error(error.error, "Error")
        })
  }
}
