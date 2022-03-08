import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppApiServiceService } from '../service/app-api-service.service';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

  photoUploadForm: FormGroup

  fileData: File = null;
  previewUrl:any = null;
  photoIsLoading: boolean = false
  photoError: string = null;
  photoSuccess: string = null
  uploadedFilePath: string = null;
  constructor(  private apiService: AppApiServiceService, private router: Router) { }
   
  ngOnInit() {
    this.defineForm()
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
      this.photoError = null;
      var formData = new FormData();
      formData.append('file', this.fileData);

      this.photoIsLoading = true
      this.apiService.postPhoto(formData).subscribe(data => {
        
        if(data.response === "Successful upload"){
          this.previewUrl=""
          this.photoUploadForm.reset()
          this.photoIsLoading = false;
          this.photoSuccess = "File uploaded Successfully"
        }
        else {
          this.photoIsLoading = false;
          this.photoError = "Something went wrong. Try again please and thank you"
        }
      })
      // this.http.post('url/to/your/api', formData)
      //   .subscribe(res => {
      //     console.log(res);
      //     //this.uploadedFilePath = res.data.filePath;
      //     alert('SUCCESS !!');
      //   }) 
  }

  defineForm(){
    this.photoUploadForm = new FormGroup({
      image: new FormControl(''),
     
    });
    
  }
  
}
