import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topic, Create_Topic } from '../topic.model';
import { MessageShowService } from '../../../../../services/message-show.service';


@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  @Input() dataList: Topic[];
  @Output() eventHandler = new EventEmitter<any>();
  @Output() editView = new EventEmitter();

  disableAddBtn: boolean = false;

  constructor(private _toastPopup: MessageShowService) { }

  ngOnInit() {
  }

  toggleObject(topic) {
    topic.isExpand = (!topic.isExpand);
    if (topic.isExpand) {
      this.expandAllTopic(topic);
    }
  }

  expandAllTopic(topic) {
    if (topic.subTopic.length == 0) {
      return;
    }
    else {
      topic.subTopic.forEach(object => {
        object.isExpand = true;
        if (object.subTopic.length > 0) {
          this.expandAllTopic(object);
        }
      });
    }
  }

  addSubtopic(topic) {
    topic.addSubtopic = topic.addSubtopic == undefined ? [] : topic.addSubtopic;
    if (!topic.addSubtopic.length) {
      topic.addSubtopic = [];
      topic.isExpand = true;
      let object_topic = new Create_Topic();
      object_topic.parent_topic_id = topic.topicId;
      object_topic.estimated_time = topic.estimated_time;
      topic.addSubtopic.push(object_topic);
    } else {
      topic.addSubtopic = [];
    }
  }

  cancelAdd(parentTopic) {
    // console.log(parentTopic);
    parentTopic.addSubtopic = [];
  }


  addEditSubtopicDetails(topic, type) {
    this.disableAddBtn = true;
    if (topic.name == "") {
      this._toastPopup.showErrorMessage('error', '', "please add subtopic name");
    this.disableAddBtn = false;
      return;
    }
    this.eventAction(type, topic);
  }

  eventAction(type, topic) {
  
    this.editView.emit({ 'data': topic, option: type });
    this.disableAddBtn = false;
    // console.log(topic);
  }

  clearObject(topic) {
    // console.log(topic);
    topic.name = topic.topicName;
    topic.isEdit = (!topic.isEdit)
  }

  EditSubtopic(topic) {
    topic.isEdit = !(topic.isEdit);
    topic.name = topic.topicName;
  }

}
