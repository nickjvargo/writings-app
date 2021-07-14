import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IStory } from './story';
import { StoryService } from './story.service';

@Component({
  templateUrl: './writing-list.component.html',
  styleUrls: ['./writing-list.component.css']
})
export class WritingListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Stories';
  errorMessage: string = '';
  sub!: Subscription;

  private _storiesFilter = '';
  get storiesFilter(): string {
    return this._storiesFilter;
  }
  set storiesFilter(value: string) {
    this._storiesFilter = value;
    this.filteredStories = this.performFilter(value);
  }

  filteredStories: IStory[] = [];
  stories: IStory[] = [];

  constructor(private storyService: StoryService) {}

  performFilter(filterBy: string): IStory[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.stories.filter((story: IStory) =>
    story.storyName.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.sub = this.storyService.getStories().subscribe({
      next: stories => {
        this.stories = stories;
        this.filteredStories = this.stories;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
