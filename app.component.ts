import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


user = { name: '', email: '', phone: '' };


constructor(private service: UserService) {}


submit() {
this.service.saveUser(this.user).subscribe(() => {
alert('Data saved successfully');
this.user = { name: '', email: '', phone: '' };
});
}
}
