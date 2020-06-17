import { Component } from '@angular/core';
import axios from 'axios';

const  requestHeaders = {
  "Content-Type": "application/json",
  "apikey": "8f9c5e0fcc4549d3bb2742188b0d43e4"
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showError= false;
  showLoader=false;
  urls =[];
  setErrorFalse(){
    if(this.showError)
    this.showError = false;
  }
  addUrl(newUrl: string) {
    
    let linkRequest = {
      destination: newUrl,
      domain: { fullName: "rebrand.ly" }
      //, slashtag: "A_NEW_SLASHTAG"
      //, title: "Rebrandly YouTube channel"
    }
    if (newUrl) {
      this.showLoader=true;
      axios({
        method:'post',
        url:'https://api.rebrandly.com/v1/links',
        data:JSON.stringify(linkRequest),
        headers:requestHeaders
      }).then((response)=>{
        this.showLoader=false;
        this.urls.push({displayValue:response.data.shortUrl,actualValue: `https://${response.data.shortUrl}`,inputLink: newUrl});
      }).catch((error)=>{
        this.showLoader=false;
        this.showError = true;
        console.log('Error occured',error)
      })
    }
  }
  goToLink(url: string){
    console.log('url',url)
    window.open(url, "_blank");
}
}
