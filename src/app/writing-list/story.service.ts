import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IStory } from "./story"

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private storiesUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  getStories(): Observable<IStory[]> {
    return this.http.get<IStory[]>(`${this.storiesUrl}/stories`)
    .pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getStory(id: number): Observable<IStory | undefined> {
    return this.getStories()
    .pipe(
      map((stories: IStory[]) => stories.find(s => s.id === id))
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}