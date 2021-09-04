import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';
import { AuthenticatorService } from '../../../../services/authenticator.service';
import { MessageShowService } from '../../../../services/message-show.service';
import { FileManagerService } from '../file-manager.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from '../../../../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/products.service';
declare var $;

@Component({
  selector: 'app-drive-home',
  templateUrl: './drive-home.component.html',
  styleUrls: ['./drive-home.component.scss']
})
export class DriveHomeComponent implements OnInit {

  jsonFlag = {
    downloading: false,
    uploading: false
  };

  @ViewChild('DragContainer', { static: false }) dragBox: ElementRef;
  @ViewChild('dropZone', { static: false }) dropZone: ElementRef;
  @ViewChild('uploaders', { static: false }) uploaders: ElementRef;
  @ViewChild('expandingTree', { static: false }) expandingTree: Tree;
  nodes: TreeNode;
  treeNodeData: TreeNode[] = [
    {
      label: "My Drive",
      data: null,
      expandedIcon: "fa fa-folder-open",
      collapsedIcon: "fa fa-folder",
      type: "folder",
      children: []
    }];

  createFetchFolder = {
    folderName: "",
    institute_id: this.fileService.institute_id,
    keyName: ""
  }

  customstyle: string = "drop-area";
  fileIdGet: string;
  shareOptions: any;
  selectedFiles: FileList[] = [];
  getCategoryData: any[] = [];
  addNewRow = []
  fileName: any[];
  pathArray = [];
  localFolder: any[];
  children: any[] = [];
  fileDisplayArr: any[] = [];
  folderDisplayArr: any[] = [];
  folderFileArr: any[] = [];
  usedSpaceDetails: any;
  isFolderEmpty: boolean = false;
  collapseFlag: boolean = false;
  getPopupOpen: boolean = false;
  createFolderControl: boolean = false;
  dragoverflag: boolean = false;
  addCategoryPopup: boolean = false;
  isGridView: boolean = true;
  isFirstTimeLoad: boolean = false;
  manualUpload = false;
  msg = '';
  selectedFolder: any;
  prevLocalFolder: any;
  filePath1: "";
  filePathPopup: "";
  str: string;
  getPath: string = "";
  headertext: string = '';
  videoplayer: boolean = false;
  currentProjectUrl: any;
  editYoutubeFile: any = {
    editView: false
  };
  fileSharedArray: any = [];
  deletePopup: boolean = false;
  deleteConfirmation: boolean = false;
  SelectedFilesArray: any[] = [];
  vimeo_video_downlodable: any = false;
  vimeoDownloadLinks: any = [];
  selectedDownloadSize: any = {};

  constructor(private zone: NgZone,
    private fileService: FileManagerService,
    private auth: AuthenticatorService,
    private msgService: MessageShowService,
    private sanitizer: DomSanitizer,
    private http: HttpService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }


  ngOnInit(refreshTree?) {
    let institute_id = sessionStorage.getItem("institute_id");
    this.editYoutubeFile.editView = false;
    if (refreshTree == true) {
      this.fetchPrefillFolderAndFiles(institute_id + "/", refreshTree);
    } else {
      this.fetchPrefillFolderAndFiles(institute_id + "/");
    }
    this.fetchUsedSpace();
    this.getParams();
  }

  //Developed by - Nalini 
  // When vimeo file uploaded successfully then video status api is called based on video id and pop up msg is displayed
  getParams() {
    let url = window.location.href;
    if (url.indexOf("?") > -1) {
      let arr = url.split('?');
      if (url.length > 1 && arr[1] !== '') {
        window.location.href = url.substring(0, arr[0].length);
        this.activatedRoute.queryParams.subscribe(params => {
          let videoId = params['videoId'];
          if (videoId != '' && videoId != null) {
            $('#thankYou').modal('show');
            let obj = {
              "videoID": videoId,
              "institute_id": sessionStorage.getItem('institute_id'),
              "video_status": "Queued",
              "category_id": 305
            }
            let url = "/api/v1/instFileSystem/updateVideoStatus";
            this.http.postData(url, obj).subscribe((res: any) => {
              console.log(res);
            }, (err) => {
            });
          }
        });
      }
    }
  }


  fetchPrefillFolderAndFiles(path: string, backLoad?) {

    let institute_id = sessionStorage.getItem("institute_id");
    let obj = { keyName: path, institute_id: institute_id };
    this.SelectedFilesArray = [];
    this.auth.showLoader();
    this.fileService.getAllFolderFiles(obj).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        this.children = res;
        console.log("children", this.children);
        this.getPath = obj.keyName;
        this.pathArray = this.getPath.split('/');
        this.pathArray.pop();
        this.vimeo_video_downlodable = res.vimeo_video_downlodable;
        // for End Empty Character
        if (backLoad) {
          this.generateTreeNodes(res, obj.keyName, true);
        } else {
          this.generateTreeNodes(res, obj.keyName);
        }
      }
    );
  }

  fetchUsedSpace() {
    this.fileService.getUsedSpace().subscribe(
      (res: any) => {
        this.usedSpaceDetails = res;
      }
    );
  }

  getFilesAndFolder(event) {
    if (event >= 200 && event < 300) {
      this.fetchPrefillFolderAndFiles(this.filePathPopup, true);
    }
  }

  closeSharePopup(event) {
    console.log(event);
    this.getPopupOpen = event;
  }

  collapseString(index) {
    // let pathArray = this.getPath.split('/');
    this.pathArray = this.pathArray.filter((ele, i) => {
      if (index >= i) {
        return true;
      } else {
        return false;
      }
    })
    // console.log(this.pathArray);
    let basePath = this.pathArray.join('/');
    // console.log(basePath);
    if (this.pathArray.length == 1) {
      basePath = basePath + '/';
      this.fetchPrefillFolderAndFiles(basePath, true);
    } else {
      this.collapseFlag = true;
      this.fetchPrefillFolderAndFiles(basePath + '/');
    }
  }


  getFilesDeleted(data) {
    let path = this.pathArray.join('/') + '/' + data.label + "/";
    let getDeletedFiles = [{
      file_id: "0",
      keyName: path
    }]
    if (confirm('Are you sure, you want to delete the file?')) {
      this.fileService.deleteFiles(getDeletedFiles).subscribe(
        (data: any) => {
          this.msgService.showErrorMessage('success', '', "Folder Deleted Successfully");
          let path = getDeletedFiles[0].keyName.split('/');
          path.pop();
          path.pop();
          let newPath = path.join('/');
          if (newPath == this.fileService.institute_id + '/') {
            this.fetchPrefillFolderAndFiles(newPath + "/", true);
          }
          else {
            this.fetchPrefillFolderAndFiles(newPath + '/', true);
          }
        },
        (error: any) => {
          this.msgService.showErrorMessage('success', '', error.error.message);
        }
      )
    }
  }

  fileId(event) {

    this.fileIdGet = event;
  }

  fileArr(event) {
    this.fileName = event;
  }

  makeFolderOpen() {
    this.createFolderControl = true;
  }

  duplicateFolderCheck(name) {
    for (let i = 0; i < this.folderDisplayArr.length; i++) {
      if (this.folderDisplayArr[i].label == name) {
        this.msgService.showErrorMessage('error', '', "Folder already exists");
        return false
      }

    }
    return true;
  }

  createFolder() {
    if (this.duplicateFolderCheck(this.createFetchFolder.folderName) == false) {
      return
    }

    else if (this.createFetchFolder.folderName == "") {
      this.msgService.showErrorMessage('error', '', "Folder name is manadatory");
      return
    }
    else {
      let path: string = "";
      let institute_id = sessionStorage.getItem("institute_id");
      path = this.pathArray.join('/') + '/'
      this.createFetchFolder.keyName = path;
      this.auth.showLoader();
      this.fileService.craeteFolder(this.createFetchFolder).subscribe(
        (data: any) => {
          this.auth.hideLoader();
          this.createFolderControl = false;
          this.createFetchFolder.folderName = "";
          this.msgService.showErrorMessage('success', '', "Folder Created successfully");
          this.fetchPrefillFolderAndFiles(this.createFetchFolder.keyName, true);
          // this.ngOnInit(true);
        },
        (error: any) => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage('error', '', error.error.message);
        }
      )
    }
  }


  toggleView() {
    this.zone.runOutsideAngular(() => {
      if (this.dragBox.nativeElement.classList.contains("grid__container")) {
        this.dragBox.nativeElement.classList.remove("grid__container");
        this.dragBox.nativeElement.classList.add("list__container");
        this.isGridView = false;
      }
      else {
        this.dragBox.nativeElement.classList.add("grid__container");
        this.dragBox.nativeElement.classList.remove("list__container");
        this.isGridView = true;
      }
    });
  }


  onNodeExpand(event) {

  }

  onNodeSelect(event) {
    this.filePathPopup = event.node.data.keyName;
    if (event.node.type == 'folder') {
      this.selectedFolder = event;
      this.getFilesAndFolder('200');
    }
  }

  onNodeCollapse(event) {

  }

  onNodeClick(event) {
    console.log(event);
  }


  folderSelected(folder) {
    this.selectedFolder = folder;
    // this.getChildFolders(folder);
    if (folder.data.hasOwnProperty('keyName')) {
      this.fetchPrefillFolderAndFiles(folder.data.keyName, true);
    }
  }

  generateTreeNodes(res, path: string, backLoad?) {
    if (backLoad == true) {
      this.isFirstTimeLoad = false;
    } else {
      this.prevLocalFolder = this.folderDisplayArr;
    }
    this.fileDisplayArr = [];
    this.folderDisplayArr = [];
    /* Local Directory Structure to be created from the incoming response */
    let localFolder: any[] = [];
    let childArr: any[] = [];
    let folderArr: any[] = [];

    if (res.files != null) {
      childArr = this.getChildArray(res.files);
    }
    if (res.folders != null) {
      folderArr = this.getChildFolders(res.folders)
    }
    if (res.files == null && res.folders == null) {
      let temp: any = [{
        label: 'empty',
        data: [],
        expandedIcon: "",
        collapsedIcon: "",
        type: "",
        children: []
      }];
      this.isFolderEmpty = true;
      this.updateTreeNode(temp);
      return;
    }
    this.isFolderEmpty = false;
    this.fileDisplayArr = childArr;

    this.folderDisplayArr = folderArr;
    localFolder = folderArr.concat(childArr);
    this.folderFileArr = localFolder;
    if (backLoad == true) {
      this.prevLocalFolder = localFolder;
    }
    /* Only When Calling the Home Folder Refresh the TreeNode */
    if (path.split("/")[1] == "") {
      /* If user has requested API for first time then fetch shell of outer folder */
      if (!this.isFirstTimeLoad) {
        this.treeNodeData = localFolder;
        this.isFirstTimeLoad = true;
      }
      else {
        this.updateTreeNode(localFolder);
      }
    }
    /* Adding Data to Tree Node */
    else {
      if (this.collapseFlag == true) {
        this.collapseFlag = false
      }
      else {
        this.updateTreeNode(localFolder);
      }
    }
  }

  updateTreeNode(localFolder) {
    this.treeNodeData.forEach(node => {
      if (node.type == "folder") {
        if (node.label == this.selectedFolder.label) {
          if (node.children.length == 0) {
            node.children = localFolder;
          } else {
            this.findNode(node, localFolder);
          }
        }
        else {
          if (node.children.length != 0) {
            this.findNode(node, localFolder);
          }
        }
      }
    });
  }

  getCategories() {
    this.addCategoryPopup = true;
    this.fileService.getCategories().subscribe(
      (data: any) => {
        this.getCategoryData = data;
      },
      (error: any) => {

      }
    )
  }

  closeCategoryPopup() {
    this.addCategoryPopup = false;
  }


  addNewRowToPopup(a) {

    let arr = []

    if (this.addNewRow.length > 4) {

    }
    else {
      this.addNewRow.push(arr);
    }

  }

  findNode(node: TreeNode, localFolder) {
    this.nodes = node;
    this.localFolder = localFolder;

    node.children.forEach(child => {
      if (child.type === "folder") {
        if (child.label === this.selectedFolder.label) {
          child.children = localFolder;
        }
        else {
          if (child.children != null) {
            if (child.children.length != 0) {
              this.findNode(child, localFolder);
            }
            else {
              child.children = [];
            }
          }
          else {
            child.children = [];
          }
        }
      }
    });
  }

  getChildArray(obj): any[] {
    let tempChildArr: any[] = [];
    let size = Object.keys(obj).length;
    if (size > 0) {
      for (let key in obj) {
        /* Structure for child files directly  under a folder */
        let childFile = { label: this.generateName(key, 'file'), icon: this.generateFileType(key), data: obj[key], type: "file" };
        tempChildArr.push(childFile);
      }
      return tempChildArr;
    }

    return tempChildArr;
  }

  getChildFolders(obj): any[] {

    let tempFolderArr: any[] = [];
    let size = Object.keys(obj).length;

    if (size > 0) {
      for (let key in obj) {
        /* Structure to define a folder */
        let folderObj: any = {
          label: this.generateName(key, 'folder'),
          data: obj[key],
          expandedIcon: "fa fa-folder-open",
          collapsedIcon: "fa fa-folder",
          type: "folder",
          children: []
        };
        tempFolderArr.push(folderObj);
      }
      return tempFolderArr;
    }

    return tempFolderArr;
  }

  generateName(key, type): string {
    let tempArr = key.split('/');
    if (tempArr.length >= 1) {
      if (type == "file") {
        return tempArr[tempArr.length - 1];
      }
      return tempArr[tempArr.length - 2];
    }
    return "";
  }

  generateFileType(key): string {

    let tempArr = key.split('.');
    if (tempArr.length >= 1) {
      let type: string = tempArr[1];
      if (type == "pdf") { return "fa-file-pdf-o"; }

      else if (type == "mp3") { return "fa fa-music"; }
      else if (type == "wav") { return "fa fa-music"; }
      else if (type == "wmv") { return "fa fa-music"; }

      else if (type == "mp4") { return "fa fa-film"; }
      else if (type == "flv") { return "fa fa-film"; }
      else if (type == "mov") { return "fa fa-film"; }

      else if (type == "jpg") { return "fa fa-picture-o"; }
      else if (type == "jpeg") { return "fa fa-picture-o"; }
      else if (type == "gif") { return "fa fa-picture-o"; }
      else if (type == "png") { return "fa fa-picture-o"; }


      else if (type == "doc") { return "fa fa-file-word-o"; }
      else if (type == "docx") { return "fa fa-file-word-o"; }

      else if (type == "xls") { return "fa fa-file-excel-o"; }
      else if (type == "xlsx") { return "fa fa-file-excel-o"; }
      else if (type == "csv") { return "fa fa-file-excel-o"; }

      else if (type == "ppt") { return "fa fa-file-powerpoint-o"; }
      else if (type == "pptx") { return "fa fa-file-powerpoint-o"; }

      else if (type == "zip") { return "fa fa-file-archive-o"; }
      else if (type == "rar") { return "fa fa-file-archive-o"; }
      else if (type == "7z") { return "fa fa-file-archive-o"; }

      return "fa-file-o";
    }

    return "fa-file-o";

  }

  navigateTo(location) {
    if (location == "") {
      let institute_id = sessionStorage.getItem("institute_id");
      this.fetchPrefillFolderAndFiles(institute_id + "/");
    }
  }

  private preventAndStop(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  onDragOver(event: any): void {

    this.dragoverflag = true;
    this.dropZone.nativeElement.classList.add("over");
    this.preventAndStop(event);
  }

  onDragLeave(event: any): void {
    if (event.target.classList.contains("ui-fileupload-content")) {
      this.dragoverflag = false;
      this.dropZone.nativeElement.classList.remove("over");
      this.preventAndStop(event);
    }
    this.preventAndStop(event);
  }

  onDrop(event: Event): void {

    this.preventAndStop(event);
    this.dropZone.nativeElement.classList.remove("over");
    this.dragoverflag = false;
    alert("files Uploaded");
  }

  onDragOverFolder(event: Event, folder): void {
    console.log(folder);
    this.dragoverflag = true;
    this.dropZone.nativeElement.classList.add("over");
    this.preventAndStop(event);
    if (folder != null) {
    }
  }

  onDragLeaveFolder(event: Event, folder): void {
    this.dragoverflag = true;
    this.dropZone.nativeElement.classList.add("over");

    this.preventAndStop(event);
    if (folder != null) {
    }
  }

  uploadBox() {
    this.manualUpload = true;
    this.addCategoryPopup = true;
  }


  getPopupValue(event) {

    this.getPopupOpen = true;
  }

  close(event) {
    this.manualUpload = false;
    this.addCategoryPopup = false;
    this.editYoutubeFile = {};
    this.editYoutubeFile.editView = false;
  }

  onSelect(event, uploaders) {
    /* Remove the overlay from layout  */
    this.dropZone.nativeElement.classList.remove("over");
    this.dragoverflag = false;
    this.addCategoryPopup = true;
    this.selectedFiles = event.files;
  }

  status(event) {

    if (event == 200) {
      this.fetchPrefillFolderAndFiles(this.filePath1 + '/', true);
      // this.generateTreeNodes(event, "");
    }
    else {

    }
  }

  downloadStatus(event) {
    this.toggleLoader(event);
    this.jsonFlag.downloading = event;
  }

  uploadStatus(event) {

    this.toggleLoader(event);
    this.jsonFlag.uploading = event;
  }

  toggleLoader(event) {
    if (event) { this.auth.showLoader(); }
    else {
      this.auth.hideLoader();
    }
  }

  treeUpdater(event) {
    let institute_id = this.fileService.institute_id;
    if (event == true) {
      this.fetchPrefillFolderAndFiles(this.getPath, true);// it maintain the state of file  user stay in that state -- laxmi
    }
  }

  filePath(event) {
    this.filePath1 = event;
  }

  filePathUpload(event) {
    this.filePathPopup = event;
  }

  handleOptions(options) {
    this.shareOptions = options;
  }

  closeFolderControl() {
    this.createFolderControl = false;
  }

  getYoutubeLink(file) {
    this.videoplayer = true;
    const video_id = atob(file.res.proc_id);
    this.currentProjectUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video_id);
  }
  closePlayer() {
    this.videoplayer = false;
  }

  editYoutubeVideo(file) {
    this.manualUpload = true;
    this.addCategoryPopup = true;
    this.editYoutubeFile = file;
    this.editYoutubeFile.editView = true;
  }

  ShowDeleteFileButton(file) {
    this.SelectedFilesArray = [];
    this.fileDisplayArr.forEach(data => {
      if (data.data.selected) {
        this.SelectedFilesArray.push(data.data);
      }
    });
  }

  deleteFile() {
    let fileArray: any = [];
    if (this.SelectedFilesArray && this.SelectedFilesArray.length) {
      if (this.SelectedFilesArray[0].category_id == 230 || this.SelectedFilesArray[0].category_id == 305) {
        let key = this.SelectedFilesArray[0].keyName.split('/https');
        if (key && key.length) {
          let newPath = key[0].concat('/');
          this.filePathPopup = newPath;
        }
      } else {
        let path = this.SelectedFilesArray[0].keyName.split('/');
        path.pop();
        let newPath = path.join('/');
        newPath = newPath.concat('/');
        this.filePathPopup = newPath;
      }
      this.SelectedFilesArray.forEach(element => {
        fileArray.push(element.file_id);
      });
    } else {
      this.msgService.showErrorMessage('error', '', 'Please select File');
      return;
    }
    let obj: any = {
      "source": 1,
      "file_id_list": fileArray,
      "institute_id": sessionStorage.getItem('institute_id'),
    }
    if (this.deleteConfirmation) {
      obj.delete_source = 3
    }
    this.auth.showLoader();
    this.http.postData('/api/v1/instFileSystem/files/delete', obj).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        if (this.deleteConfirmation) {
          this.msgService.showErrorMessage('success', '', 'Deleted Successfully');
          this.closeDeletePopup();
          this.getFilesAndFolder('200');
        } else {
          this.fileSharedArray = [];
          this.deletePopup = true;
        }
      },
      err => {
        this.auth.hideLoader();
        this.fileSharedArray = err.error.error;
        if (!this.deleteConfirmation) {
          this.deletePopup = true;
        }
      }
    )
  }

  closeDeletePopup() {
    this.deletePopup = false;
    this.fileDisplayArr.forEach(data => {
      data.data.selected = false;
    });
    this.getFilesAndFolder('200');
    this.SelectedFilesArray = [];
    this.deleteConfirmation = false;
  }

  confirmDelete() {
    this.deleteConfirmation = true;
    this.deleteFile();
  }

  playVimeoVideo(obj) {
    this.videoplayer = true;
    this.currentProjectUrl = this.sanitizer.bypassSecurityTrustResourceUrl(obj.res.video_url);
  }

  // Developed by Nalini
  // To download vimeo file
  getVimeoDownloadData(obj) {
    this.auth.showLoader();
    this.productService.getMethod('vimeo/download-links/' + obj.res.video_id, null).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        this.vimeoDownloadLinks = res.result;
        if (this.vimeoDownloadLinks && this.vimeoDownloadLinks.length) {
          $('#downloadOption').modal('show');
        } else {
          this.msgService.showErrorMessage('error', '', 'No download links found')
        }
      },
      err => {
        this.auth.hideLoader();
        console.log(err);
      }
    )
  }

  changeSelectedSize(obj) {
    this.selectedDownloadSize = obj;
  }

  downloadVimeoVdo() {
    window.open(this.selectedDownloadSize.link, "_blank");
    $('#downloadOption').modal('hide');
  }
}
