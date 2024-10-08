import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExerciseSet, ExerciseSetList } from '../../interfaces/exercise-set';

@Component({
  selector: 'app-list-entries',
  templateUrl: './list-entries.component.html',
  styleUrl: './list-entries.component.css'
})
export class ListEntriesComponent {
  @Input() exerciseList!: ExerciseSetList;
  @Output() newRepEvent = new EventEmitter<ExerciseSet>();
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() editEvent = new EventEmitter<ExerciseSet>();

  itemTrackBy(index: number, item: ExerciseSet) {
    return item.id;
  }
}
