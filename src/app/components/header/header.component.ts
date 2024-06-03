import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor() { }

  downloadPDF() {
    const pdfUrl = 'https://drive.google.com/file/d/1oVYu8wUDnmJ7288hCT2yhXh2cRrMYh-E/view?usp=sharing';
    const pdfName = 'Ginaca David CV.pdf';  

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfName;

    
    document.body.appendChild(link);

    
    link.click();

    
    document.body.removeChild(link);
  }

}
