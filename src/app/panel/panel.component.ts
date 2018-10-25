import { Component, OnInit, Input } from '@angular/core';
import {Panel} from '../models/panel-model';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() childPanelList: Panel[];
  constructor() { }

  ngOnInit() {
  }

}
