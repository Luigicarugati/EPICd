import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userId: string | undefined;
  userProfile: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId !== null) {
      this.userId = userId;
      this.fetchUserProfile();
    } else {

    }
  }

  fetchUserProfile(): void {
    this.apiService.getUserProfile(this.userId).subscribe(
      (      profile: any) => {
        this.userProfile = profile;
      },
      (      error: any) => {
        console.error('Si è verificato un errore durante il recupero del profilo utente:', error);

      }
    );
  }

  updateProfile(): void {

    console.log('Profilo utente aggiornato:', this.userProfile);
  }
}
