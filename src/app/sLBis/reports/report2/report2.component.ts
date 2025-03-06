import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/_services/api-call.service';
import { API_ENDPOINTS } from 'src/app/_shared/constants/api-endpoints';

@Component({
  selector: 'app-report2',
  templateUrl: './report2.component.html',
  styleUrls: ['./report2.component.css']
})
export class Report2Component implements OnInit {

  reportData: any[] = []; // Holds API data

  totalSum = 0 ;
  fixedColumns = ['LOW', 'MEDIUM', 'HIGH'];

  searchParams = {
    company : '',
    year: '',
    month: ''
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

  constructor(public apiCallService: ApiCallService) { }

  ngOnInit(): void {
  }

    search() {

      if (!this.searchParams.company) {
        alert("Please select values for both dropdowns");
        return;
      }
  
      if (!this.searchParams.year) {
        alert("Please select values for both dropdowns");
        return;
      }
  
      if (!this.searchParams.month) {
        alert("Please select values for both dropdowns");
        return;
      }
  
      const { company, year, month } = this.searchParams;
  
      let url = API_ENDPOINTS.INQUIRY.REPORT2+"/"+company+"/"+year+"/"+month;
      
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
      this.searchParams = { company:'' ,year: '', month: '' }; // Reset search parameters
      this.reportData = [];
      this.totalSum = 0;
    }

    sendEmail(): void {

      if (!this.searchParams.company) {
        alert("Please select values for both dropdowns");
        return;
      }
  
      if (!this.searchParams.year) {
        alert("Please select values for both dropdowns");
        return;
      }
  
      if (!this.searchParams.month) {
        alert("Please select values for both dropdowns");
        return;
      }

      if (!confirm("Are you sure you want to proceed with sending the report?")) {
        return; // Stop execution if user cancels
      }

      const { company, year, month } = this.searchParams;

      let url = API_ENDPOINTS.INQUIRY.SEND_REPORT2+"/"+company+"/"+year+"/"+month; 
      this.apiCallService.executeGetNoAuth(url).subscribe(
        (data) => {
          //this.reportData = data;
          
        },
        (error) => {
          console.error('Error fetching report data:', error);
        }
      );
    }

    calculateTotalSum(data: any[]): number {
      return data.reduce((sum, item) => sum + (item.TOTAL || 0), 0);
    }

}
