import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView, CalendarMonthViewDay } from 'angular-calendar';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  activeDayIsOpen: boolean = false;
  CalendarView = CalendarView;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.apiService.getTodos().subscribe({
      next: (data: any[]) => {
        this.events = data.map(todo => ({
          start: new Date(todo.date),
          title: todo.title,
          color: {
            primary: todo.completed ? '#1e90ff' : '#ff4500',
            secondary: todo.completed ? '#D1E8FF' : '#FFE4E1'
          },
          allDay: true
        }));
      },
      error: (error) => {
        console.error('Error in subscription:', error);
      }
    });
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked(day: CalendarMonthViewDay): void {
    if (this.viewDate.getMonth() === day.date.getMonth()) {
      if (
        (this.activeDayIsOpen === true && day.date.getDate() === this.viewDate.getDate()) ||
        day.events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = day.date;
      }
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
