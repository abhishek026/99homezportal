import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/Rx';
import { AppComponent } from '../../../../app.component';
import { HttpService } from '../../../../services/http.service';
import { FileManagerService } from '../file-manager.service';

export class File {

  private name: string;
  private type: string;
  private res: any;

  constructor(name, type, res) {
    this.name = name;
    this.type = type;
    this.res = res;
  }

}



@Component({
  selector: 'file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileCardComponent implements OnChanges {

  // global variables
  jsonFlag = {
    isRippleLoad: false,
  };

  @Input() data: any;

  @Output() draggedover = new EventEmitter<any>(null);
  @Output() draggedleave = new EventEmitter<any>(null);

  @Output() fileid = new EventEmitter<any>();

  @ViewChild("fileHeader", { static: true }) fileHeader: ElementRef;
  @ViewChild("fileHeader", { static: true }) fileImage: ElementRef;

  @Output() status = new EventEmitter<any>();
  @Output() filePath = new EventEmitter<any>();
  @Input() fileDisplayArr: any[] = [];

  fileObj: File;

  @Input() selectedFolder: any[] = [];

  @Output() getPopupValue = new EventEmitter<any>();
  getPopupValueOpen: boolean = true;

  @Output() fileArr = new EventEmitter<any>();
  @Output() shareOptions = new EventEmitter<any>();
  @Output() playYoutubeVideo = new EventEmitter<any>();
  @Output() editYoutubeVideo = new EventEmitter<any>();
  @Output() ShowDeleteFileButton = new EventEmitter<any>();
  @Output() playVimeoVideo = new EventEmitter<any>();
  @Input() vimeo_video_downlodable: any;
  @Output() getVimeoDownloadData = new EventEmitter<any>();
  dwnldLink = "";
  arr: any[] = [];
  fileURL: any;
  vimeo_category_id = '305';

  @Output() downloadStatus = new EventEmitter<any>();
  constructor(
    private cd: ChangeDetectorRef,
    private fileService: FileManagerService,
    private appC: AppComponent,
    private _http: HttpService,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnChanges() {
    this.generateFile(this.data);
  }

  ngOnInit() {
  }

  generateFile(data) {
    if (data.data.category_id == "182") {
      data.data.category_name = "Study Material"
    }
    let userid = sessionStorage.getItem('userid');
    data.data.teacher_access = true;
    if ((sessionStorage.getItem('userType')) == '3' && userid != data.data.uploadedUserId) {
      data.data.teacher_access = false;
    }
    data.data.selected = false;
    // let name = data.label.split(".")[0];
    // let type = data.label.split(".")[1];
    var name = data.label.substring(0, data.label.lastIndexOf("_"));
    var type = data.label.substring(data.label.lastIndexOf(".") + 1);
    this.fileObj = new File(name, type, data.data);
    if (data.data.category_id == "230") {
      this.fileHeader.nativeElement.classList.add("youtube");
      this.fileHeader.nativeElement.classList.add("youtube-url");
    } else if (data.data.category_id == this.vimeo_category_id && (data.data.thumbnail_list == null || !data.data.thumbnail_list || (!data.data.thumbnail_list.length || data.data.thumbnail_list[0].posterUrl == null))) {
      this.fileHeader.nativeElement.classList.add("video");
      this.fileHeader.nativeElement.classList.add("vimeo-url");
    } else {
      this.setImageAndIcons(type);
    }
    this.cd.detectChanges();
    this.cd.detach();
  }

  setImageAndIcons(type: string) {

    /* Document File */
    if (type === "doc" || type === "docx") {
      this.fileHeader.nativeElement.classList.add("docx");
      this.fileHeader.nativeElement.classList.add("doc-file");

    }

    /* PDF format */
    else if (type === 'pdf') {
      this.fileHeader.nativeElement.classList.add("pdf");
      this.fileHeader.nativeElement.classList.add("pdf-file");

    }

    /* Ms Excel Files */
    else if (type === 'xls' || type === "xlsx" || type === "csv") {
      this.fileHeader.nativeElement.classList.add("xlsx");
      this.fileHeader.nativeElement.classList.add("xlsx-file");

    }


    /* Text & RTF files */
    else if (type === 'txt' || type === "rtf") {
      this.fileHeader.nativeElement.classList.add("texts");
      this.fileHeader.nativeElement.classList.add("text-file");

    }


    /* jpg,jpeg,png */
    else if (type === 'jpg' || type === 'jpeg' || type === 'png' || type == "bmp" || type === "tif") {
      this.fileHeader.nativeElement.classList.add("image");
      this.fileHeader.nativeElement.classList.add("image-file");
    }

    /* Videos */
    else if (type === 'mp4' || type === 'flv' || type === 'wmv' || type === 'mov') {
      this.fileHeader.nativeElement.classList.add("video");
      this.fileHeader.nativeElement.classList.add("video-file");

    }

    /* Power point Slides */
    else if (type === 'ppt' || type === 'pptx') {
      this.fileHeader.nativeElement.classList.add("texts");
      this.fileHeader.nativeElement.classList.add("file-file");

    }

    /* Power point Slides */
    else if (type === 'mp3' || type === 'wav') {
      this.fileHeader.nativeElement.classList.add("audio");
      this.fileHeader.nativeElement.classList.add("audio-file");

    }


    /* Power point Slides */
    else if (type === 'rar' || type === 'zip') {
      this.fileHeader.nativeElement.classList.add("zip");
      this.fileHeader.nativeElement.classList.add("zip-file");

    }


    /* Default Case */
    else {
      this.fileHeader.nativeElement.classList.add("texts");
      this.fileHeader.nativeElement.classList.add(".file-file");

    }

  }

  onDragOver(event: Event) {
    this.draggedover.emit(event);
    this.preventAndStop(event);
  }

  onDragLeave(event: Event) {
    //this.draggedleave.emit(event);
    this.draggedover.emit(event);
    this.preventAndStop(event);
  }

  private preventAndStop(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  getFilesDeleted(event) {
    this.ShowDeleteFileButton.emit(event);
  }

  getPopupOpen(fileObj) {
    let shareOptions = {
      publicShare: fileObj.res.public_share,
      instituteShare: fileObj.res.inst_share,
      batchShare: fileObj.res.student_batch_share,
      isReadonly: fileObj.res.is_readonly,
      fileType: fileObj.type
    }
    if (shareOptions.publicShare == 0 && shareOptions.instituteShare == 0 && shareOptions.batchShare == 0) {
      this.shareOptions.emit("new");
      this.shareOptions.emit(shareOptions);
    } else {
      this.shareOptions.emit(shareOptions);
    }
    this.fileArr.emit(fileObj);
    this.fileid.emit(fileObj.res.file_id)
    this.getPopupValue.emit(this.getPopupValueOpen);
  }

  convertBase64ToArray(val) {
    var binary_string = window.btoa(encodeURI(val));
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) { bytes[i] = binary_string.charCodeAt(i); }
    return bytes.buffer;
  }

  getFileDownloaded(fileObj) {
    if(fileObj.res.category_id!=this.vimeo_category_id) {
    let file_type = fileObj.type
    const url = "/api/v1/instFileSystem/downloadFile/" + this.fileService.institute_id + "?fileId=" + fileObj.res.file_id;
    this.downloadStatus.emit(true);
    this._http.downloadItem(url, file_type).subscribe(
      (response: any) => {
        if (response) {
          const blob = new Blob([response], { type: file_type });
          this.fileURL = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
          if (this.fileURL != null) {
            setTimeout(() => {
              var hiddenDownload = <HTMLAnchorElement>document.getElementById('downloadFileClick');
              hiddenDownload.href = this.fileURL.changingThisBreaksApplicationSecurity;
              hiddenDownload.download = fileObj.res.file_name;
              hiddenDownload.click();
              this.downloadStatus.emit(false);
            }, 500);
          }
        }
      },
      err => {
        this.downloadStatus.emit(false);
        console.log(err);
      }
    )
    } else {
      this.getVimeoDownloadData.emit(fileObj);
    }
  }
  /**
   *
   * Method to get the original file name from filename(with autoID)
   *
   */
  // getFileName(fileName) {
  //   return fileName;//.substring(0, fileName.lastIndexOf("_"));
  // }

  getOriginalFileName(fileName) {
    var filenamePart1 = fileName.substring(0, fileName.lastIndexOf("_"));
    var filenamePart2 = fileName.substring(fileName.lastIndexOf("."));
    fileName = filenamePart1 + filenamePart2;
    // if(fileName.length>20){
    //   return  filenamePart1.substring(0,20)+filenamePart2;
    // }else{
    return fileName;
    // }    
  }

  getYoutubeLink(file) {
    this.playYoutubeVideo.emit(file);
  }

  editYoutubeUrl(file) {
    this.editYoutubeVideo.emit(file);
  }

  getVimeoVideo(file) {
    this.playVimeoVideo.emit(file);
  }
}
