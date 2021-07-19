import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStory } from './story';
import { StoryService } from './story.service';

@Component({
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {
  story: IStory | undefined;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private storyService: StoryService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getStory(id);
    }
  }

  getStory(id: number): void {
    this.storyService.getStory(id).subscribe({
      next: story => this.story = story,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/stories']);
  }

}
