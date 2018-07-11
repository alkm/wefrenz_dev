import { Component, ViewChild, ElementRef, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from '../../app/services/validators/validation.service';
import { AppSettingsService } from '../../app/services/settings/app-settings.service';
import { PhotosService } from '../../app/services/data/photos.service';
import { PhotosCarouselComponent } from '../photos-carousel/photos-carousel.component';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [PhotosService]
})
export class PhotosComponent implements OnInit {

  @ViewChild('photosCarousel', {read: ViewContainerRef}) photosCarousel: ViewContainerRef;

  private files: any;
  private userId: string = '';
  private photosUploadForm: any;
  private photosGroup: any;
  private uploadProgress: number = 0;
  private isProgress: boolean = false;
  private albumForm : any;
  private photosAlbumList: any;
  private photosList: any;
  private albumTitle = '';
  private albumDesc = '';
  private isCreateAlbum: boolean = false;
  private isAddAlbum: boolean = false;
  private isUpdateAlbum: boolean = false;
  private isPhotosAlbum: boolean = true;
  private isAlbumPhotos: boolean = false;
  private albumInfo : any;
  private photosInfo: any;
  private carouselRef: any;
  private photosCarouselComponent: any;
  private imageSource: string[] = [];

  constructor(private formBuilder: FormBuilder, private photosService: PhotosService, private componentFactoryResolver: ComponentFactoryResolver) {
    let loginData = JSON.parse(localStorage.getItem('loginData'));
      this.userId = loginData.username;

      this.photosUploadForm = this.formBuilder.group({
      'file': ['']
    });

    this.photosGroup = new FormGroup({
         file: new FormControl()
      });

      this.albumForm = this.formBuilder.group({
        'albumTitle': ['', [Validators.required, ValidationService.blankDataValidator]],
        'albumDesc': ['', [Validators.required, ValidationService.blankDataValidator]]
      });

      this.fetchPhotosAlbumInfo();
  }

  ngOnInit() {
  }
  ngAfterContentInit(){
   
  }

  private createCarouselItems(imageSource){
    if(this.carouselRef){
      this.carouselRef.destroy();
    }
    this.photosCarouselComponent = this.componentFactoryResolver.resolveComponentFactory(PhotosCarouselComponent);
    this.carouselRef = this.photosCarousel.createComponent(this.photosCarouselComponent);
    this.carouselRef.instance.imageSource = imageSource;
  }

  private fileChangeEvent(event, directUpload){
    let self = this;
    let userId = this.userId;
    let file: any;
    if (event.target.files && event.target.files[0]) {
      file = event.target.files[0];
      uploadPhoto();
    }
    function uploadPhoto() {
      let formData = new FormData();
      formData.append('uploadfile', file);
      formData.append('userid', userId);
      if(!directUpload){
        formData.append('album', self.photosInfo.title);
      }else{
        formData.append('album', 'untitled');
      }

      let xhr = new XMLHttpRequest();
      xhr.open('post', AppSettingsService.API_ENDPOINT("local")+'/api/uploadPhotos', true);
      xhr.upload.onprogress = function(e) {
        if (e.lengthComputable) {
          let percentage = (e.loaded / e.total) * 100;
          console.log(percentage);
          if((percentage > 0) && (percentage < 100)){
            self.isProgress = true;
          }else{
            self.isProgress = false; 
          }
          self.uploadProgress = percentage;

          //$('div.progress div').css('width', percentage.toFixed(0) + '%');
          //$('div.progress div').html(percentage.toFixed(0) + '%');
        }
      };

      xhr.onerror = function(e) {
        alert('An error occurred while submitting the form. Maybe your file is too big');
      };
      xhr.onload = function() {
        /*let file = xhr.responseText;
        $('div.progress div').css('width','0%');
        $('div.progress').hide();
        showMsg("alert alert-success", "File uploaded successfully!");
        $('#myFile').val('');*/
        if(self.isPhotosAlbum){
          self.fetchPhotosAlbumInfo();
        }else{
          self.fetchAlbumPhotosInfo(); 
        }
      };

      xhr.onreadystatechange = function()
      {
        if (xhr.readyState == 4 && xhr.status == 200){
            callback(xhr.responseText); // Another callback here
        }
      }; 

      function callback(responseText){
        if(JSON.parse(responseText).status === 'sessionExpired'){
          alert('Session Expired, Please Login Again');
        }
      }

      xhr.send(formData);
      return false;
    }

  //var files = fileInput.srcElement.files;
  //console.log(files);
  //this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
  //  console.log('sent');
  //});
  }

   private createAlbumInfo(event){
      if (this.albumForm.dirty && this.albumForm.valid) {
       // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
        let postObj = {'username': this.userId,
          'title': this.albumForm.value.albumTitle,
          'desc': this.albumForm.value.albumDesc};
          this.photosService.createPhotosAlbum(postObj).subscribe(data => this.afterAlbumCreated(data));
      }
  }

  private afterAlbumCreated(result) {
    if(result.status === 'failure'){
        alert(result.message);
    }else{
      this.cancelAlbum(null);
      //alert(result.message);
      this.fetchPhotosAlbumInfo();
    }
  }

   private updateAlbumInfo(event){
      if (this.albumForm.dirty && this.albumForm.valid) {
       // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
        let postObj = {'id': this.albumInfo._id,
          'username': this.userId,
          'title': this.albumForm.value.albumTitle,
          'desc': this.albumForm.value.albumDesc};
          this.photosService.updatePhotosAlbum(postObj).subscribe(data => this.afterAlbumUpdated(data));
      }
  }

  private afterAlbumUpdated(result) {
    if(result.status === 'failure'){
        alert(result.message);
      }else{
        this.cancelAlbum(null);
        //alert(result.message);
        this.fetchPhotosAlbumInfo();
      }
  }

  private createPhotosAlbum(event){
    this.isCreateAlbum = true;
    this.isAddAlbum = true;
    this.isUpdateAlbum = false;
  }

  private cancelAlbum(event){
    this.isCreateAlbum = false;
    this.isAddAlbum = false;
    this.isUpdateAlbum = false;
    this.albumForm.reset();
  }

  private fetchPhotosAlbumInfo(){
    let postObj = {'username': this.userId};
      this.photosService.fetchPhotosAlbumInfo(postObj).subscribe(data => this.afterPhotosAbumInfo(data));
  }

  private fetchAlbumPhotosInfo(){
    let postObj = {'username': this.userId, 'album': this.albumTitle};
      this.photosService.fetchAlbumPhotosInfo(postObj).subscribe(data => this.afterAlbumPhotosInfo(data));
  }

  private afterPhotosAbumInfo(result){
    let self = this;
    this.photosAlbumList = result;
    if(result.length > 0){
      self.imageSource = [];
      for(let i in this.photosAlbumList[0].photosList){
        self.imageSource.push(this.photosAlbumList[0].photosList[i].actualPhoto)
      }
      this.createCarouselItems(self.imageSource);  
    }
  }
  private afterAlbumPhotosInfo(result){
    this.photosList = result[0].photosList;
  }

  //Need to activate/deactivate edit btn later based on changes in title field
  private editPhotosAlbum(event){
    this.albumInfo = event.data;
      this.isCreateAlbum = true;
      this.isAddAlbum = false;
    this.isUpdateAlbum = true;
      this.albumTitle = this.albumInfo.title;
      this.albumDesc = this.albumInfo.description;

    }
    //Diplaying the list of photos under a particular audio album
    private showPhotosList(event){
      let self = this;
      this.photosInfo = event.data;
      this.isPhotosAlbum = false;
      this.isAlbumPhotos = true;
      this.photosList = this.photosInfo.photosList;
      this.albumTitle = this.photosInfo.title;
       
      self.imageSource = [];
      for(let i in this.photosList){
        self.imageSource.push(this.photosList[i].actualPhoto);
      }
      this.createCarouselItems(self.imageSource); 
      //console.log('this.imageSources'+this.imageSources);
      //this.fetchAlbumPhotosInfo();

    }

    private goToMyAlbum(event){
      this.isPhotosAlbum = true;
      this.isAlbumPhotos = false;
      this.fetchPhotosAlbumInfo();
    }

  private triggerWindowEvent(eventType, evtObj) {
    var evt = new CustomEvent(eventType, {'detail': evtObj});
    window.dispatchEvent(evt);
  }

}
