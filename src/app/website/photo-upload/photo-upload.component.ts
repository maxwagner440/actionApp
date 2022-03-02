import { Component, OnInit } from '@angular/core';
import { AppApiServiceService } from '../service/app-api-service.service';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

  
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(  private apiService: AppApiServiceService) { }
   
  ngOnInit() {
  }
   
  fileProgress(fileInput: any) {
    console.log(fileInput.target.files)
      this.fileData = <File>fileInput.target.files[0];
      console.log(fileInput)
      this.preview();
  }
 
  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
  }
   
  onSubmit() {
      var formData = new FormData();
      formData.append('file', this.fileData);
      console.log(this.fileData)
      console.log(formData)
      this.apiService.postPhoto(formData).subscribe(data => {
        console.log(data)
      })
      // this.http.post('url/to/your/api', formData)
      //   .subscribe(res => {
      //     console.log(res);
      //     //this.uploadedFilePath = res.data.filePath;
      //     alert('SUCCESS !!');
      //   }) 
  }
}
