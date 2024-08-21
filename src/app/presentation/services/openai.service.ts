import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { orthographyUseCase } from 'use-cases/index';

@Injectable({providedIn: 'root'})
export class OpenAIService {


    checkOrthography( prompt: string ) {
        return from( orthographyUseCase(prompt));
    }
}