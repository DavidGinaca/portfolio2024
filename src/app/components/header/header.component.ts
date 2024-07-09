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
    const pdfUrl = 'https://drive.google.com/file/d/1qUDrCrL6kS4sTN1HDp2-Hw_ae7Vrge0x/view?usp=sharing';
    const pdfName = 'Ginaca Nieto David CV.pdf';  

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfName;

    
    document.body.appendChild(link);

    
    link.click();

    
    document.body.removeChild(link);
  }

}
