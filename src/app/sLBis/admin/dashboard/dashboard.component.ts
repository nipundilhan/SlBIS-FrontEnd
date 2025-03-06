import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_services/user-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  time: string = '';
  currentDate: Date = new Date();
  calendarHtml: string = '';
  apps = [
    { name: 'Business Manager', link: 'https://business.google.com' },
    { name: 'Apps', link: 'https://play.google.com' },
    { name: 'Email', link: 'https://mail.google.com' },
    { name: 'Google Meet', link: 'https://meet.google.com' },
    { name: 'WhatsApp Business', link: 'https://web.whatsapp.com' },
    { name: 'Contacts', link: 'https://contacts.google.com' },
    { name: 'Work space', link: 'https://drive.google.com/drive/u/0/search?q=WS%20type:folder%20parent:0AMKfIGNxR9P9Uk9PVA' },
    { name: 'Calendar', link: 'https://calendar.google.com' },
    { name: 'Photos', link: 'https://photos.google.com' },
    { name: 'Finance', link: 'https://docs.google.com/spreadsheets/d/14RfKSi2m2UXCZN0kX0vJNGPWMDvEva_p03Sqbf0AiHk/edit?gid=0#gid=0' },
    { name: 'Basics', link: 'https://keep.google.com' },
    { name: 'Insighths', link: 'https://www.google.com/save' },
    { name: 'The Team', link: 'https://drive.google.com/drive/u/0/folders/131g8_SotS7j0Alw7jffMfJxW3PmxhIv3' },
    { name: 'Dashboards', link: 'https://docs.google.com/spreadsheets/d/1apVrc3s246IyRfp8u6Yj7YxTQEqoOZTUy8NKrnpsy14/edit?gid=494867224#gid=494867224' },
    { name: 'FB', link: 'https://facebook.com' },
    { name: 'Linkedin', link: 'https://linkedin.com/feed/' },
    { name: 'ChatGPT', link: 'https://chatgpt.com' },
    { name: 'Odoo T', link: 'https://ride-life-test.odoo.com/odoo?cids=1' },
    { name: 'YouTube', link: 'https://www.youtube.com/@SLBISSCHOOL' },
    { name: 'TikTok', link: 'https://www.tiktok.com/@sl_bis_school' },
    { name: 'Instagram', link: 'https://www.instagram.com/sl_bis_school/' },
    { name: 'Odoo', link: 'https://skmjcdev-lumala-erp.odoo.com/web#action=menu&cids=2&menu_id=395' },
    { name: 'Canva', link: 'https://www.canva.com/' },
    { name: 'Proton mail', link: 'https://account.proton.me/login' }
  ];

  constructor(private userAuthService: UserAuthService , private router: Router) {}

  ngOnInit(): void {

    if(this.userAuthService.getRole() !== 'ROOTADMIN'){
      this.router.navigate(['/home']);
    }

    setInterval(() => this.updateTime(), 1000);
    this.generateCalendar();
  }

  updateTime(): void {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    this.time = `${hours}:${minutes}:${seconds}`;
  }

  generateCalendar(): void {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.getDate();

    const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let calendarHtml = `<table>
      <tr><th colspan="7">${monthNames[month]} ${year}</th></tr>
      <tr>
        <th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th>
        <th>Fri</th><th>Sat</th><th>Sun</th>
      </tr>
      <tr>`;

    for (let i = 0; i < firstDay; i++) {
      calendarHtml += '<td></td>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayOfWeek = (firstDay + day - 1) % 7;
      if (dayOfWeek === 6) { // Sunday
        calendarHtml += `<td class="sunday">${day}</td>`;
      } else {
        calendarHtml += `<td${day === today ? ' class="today"' : ''}>${day}</td>`;
      }
      if (dayOfWeek === 6 && day !== daysInMonth) {
        calendarHtml += '</tr><tr>';
      }
    }

    calendarHtml += '</tr></table>';
    this.calendarHtml = calendarHtml;
  }
}
