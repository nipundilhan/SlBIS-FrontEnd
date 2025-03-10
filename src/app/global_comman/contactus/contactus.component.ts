import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email: string = "bdm.slbis@gmail.com";

  openWhatsApp() {
    const phoneNumber = '94707070006'; // Business WhatsApp number (without + or spaces)
    const message = encodeURIComponent('Hi,');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }

}
