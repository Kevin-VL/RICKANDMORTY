import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
 profileId: string;
 character;
  constructor(
    private activateRouter: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.profileId=this.activateRouter.snapshot.paramMap.get('id')
     this.http.get('https://rickandmortyapi.com/api/location/'+ this.profileId)
     .subscribe(res => {
      console.log(res);
      this.character = res });
  }

}
