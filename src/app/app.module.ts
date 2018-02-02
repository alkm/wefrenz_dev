import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { RouteinfoService } from 'app/services/shareobject/routeinfo.service';
import { ModalService } from 'app/modal/modal.service';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { HomeComponent } from './home/home.component';
import { PublicNavComponent } from './public-nav/public-nav.component';
import { PrivateNavComponent } from './private-nav/private-nav.component';
import { ProfileAreaComponent } from './profile-area/profile-area.component';
import { TileMenuComponent } from './tile-menu/tile-menu.component';
//import { ChatPanelComponent } from './chat-panel/chat-panel.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { SearchResultListItemComponent } from './search-result-list-item/search-result-list-item.component';
import { ProfileComponent } from './profile/profile.component';
import { CoverpicComponent } from './coverpic/coverpic.component';
import { ModalComponent } from './modal/modal.component';

import { ModalModule } from './modal/modal.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CarouselModule } from 'angular4-carousel';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { CapturePicComponent } from './capture-pic/capture-pic.component';
import { FriendRequestPendingListComponent } from './friend-request-pending-list/friend-request-pending-list.component';
import { ChatComponent } from './chat/chat.component';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatSearchPipe } from './pipes/chat-search.pipe';
import { VideoComponent } from './video/video.component';
import { AvchatComponent } from './avchat/avchat.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { VideoPlayerComponent } from './video-player/video-player.component';;
import { AdComponent } from './ad/ad.component';
import { VideoAlbumIconComponent } from './video-album-icon/video-album-icon.component';
import { AlbumSearchPipe } from './pipes/album-search.pipe';
import { VideoIconComponent } from './video-icon/video-icon.component';
import { VideoSearchPipe } from './pipes/video-search.pipe';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { AudioIconComponent } from './audio-icon/audio-icon.component';
import { AudioAlbumIconComponent } from './audio-album-icon/audio-album-icon.component';
import { AudioSearchPipe } from './pipes/audio-search.pipe';
import { PhotosComponent } from './photos/photos.component';
import { PhotosIconComponent } from './photos-icon/photos-icon.component';
import { PhotosAlbumIconComponent } from './photos-album-icon/photos-album-icon.component';
import { PhotosSearchPipe } from './pipes/photos-search.pipe';
import { PhotosCarouselComponent } from './photos-carousel/photos-carousel.component';
import { MusicListComponent } from './music-list/music-list.component';




@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    SignupComponent,
    ControlMessagesComponent,
    HomeComponent,
    PublicNavComponent,
    PrivateNavComponent,
    ProfileAreaComponent,
    TileMenuComponent,
    //ChatPanelComponent,
    InfoPanelComponent,
    SearchResultListItemComponent,
    ProfileComponent,
    CoverpicComponent,
    ModalComponent,
    ImageCropperComponent,
    CapturePicComponent,
    FriendRequestPendingListComponent,
    ChatComponent,
    ChatItemComponent,
    ChatSearchPipe,
    ChatWindowComponent,
    VideoComponent,
    AvchatComponent,
    EntertainmentComponent,
    VideoPlayerComponent,
    AdComponent,
    VideoAlbumIconComponent,
    AlbumSearchPipe,
    VideoIconComponent,
    VideoSearchPipe,
    MusicPlayerComponent,
    AudioIconComponent,
    AudioAlbumIconComponent,
    AudioSearchPipe,
    PhotosComponent,
    PhotosIconComponent,
    PhotosAlbumIconComponent,
    PhotosSearchPipe,
    PhotosCarouselComponent,
    MusicListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ImageCropperModule,
    CarouselModule,
    RouterModule.forRoot([
      {
        path: 'public',
        component: PublicComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'profile/:id',
        component: ProfileComponent
      },
      {
        path: 'entertainment/:id',
        component: EntertainmentComponent
      }
    ], { useHash: true })
  ],
  providers: [RouteinfoService, ModalService],
  entryComponents: [AppComponent, LoginComponent, SignupComponent, PhotosCarouselComponent, MusicListComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
