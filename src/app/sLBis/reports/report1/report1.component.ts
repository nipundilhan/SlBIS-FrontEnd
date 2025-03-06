import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/_services/api-call.service';
import { API_ENDPOINTS } from 'src/app/_shared/constants/api-endpoints';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.css']
})
export class Report1Component implements OnInit {


  reportData: any[] = []; // Holds API data
  apiUrl = 'http://localhost:3000/YM/inquiry/report1/2025/2';


  totalSum = 0 ;
  fixedColumns = ['HR', 'SALES','OPERATIONS', 'OTHER'];

  searchParams = {
    year: "",
    month: ""
  };

  months = [
    { value: 1, name: 'January' },
    { value: 2, name: 'February' },
    { value: 3, name: 'March' },
    { value: 4, name: 'April' },
    { value: 5, name: 'May' },
    { value: 6, name: 'June' },
    { value: 7, name: 'July' },
    { value: 8, name: 'August' },
    { value: 9, name: 'September' },
    { value: 10, name: 'October' },
    { value: 11, name: 'November' },
    { value: 12, name: 'December' }
  ];

  constructor(public apiCallService: ApiCallService ) { }

  ngOnInit(): void {
  }

  search() {

    if (!this.searchParams.year) {
      alert("Please select values for both dropdowns");
      return;
    }

    if (!this.searchParams.month) {
      alert("Please select values for both dropdowns");
      return;
    }

    const { year, month } = this.searchParams;

    let url = API_ENDPOINTS.INQUIRY.REPORT1+"/"+year+"/"+month;
    
    this.apiCallService.executeGetNoAuth(url).subscribe(
      (data) => {
        this.reportData = data;
        this.totalSum = this.calculateTotalSum(data); 
      },
      (error) => {
        console.error('Error fetching report data:', error);
      }
    );
  }

  reset(): void {
    this.searchParams = { year: '', month: '' }; // Reset search parameters
    this.totalSum = 0;
    this.reportData = [];
  }

  calculateTotalSum(data: any[]): number {
    return data.reduce((sum, item) => sum + (item.TOTAL || 0), 0);
  }





}
