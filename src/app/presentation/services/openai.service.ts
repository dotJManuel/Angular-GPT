import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { orthographyUseCase, prosConsStreamUseCase, prosConsUseCase, translateTextUseCase } from 'use-cases/index';

@Injectable({providedIn: 'root'})
export class OpenAIService {


    checkOrthography( prompt: string ) {
        return from( orthographyUseCase(prompt));
    }

    prosConsDiscusser( prompt: string ) {
        return from( prosConsUseCase(prompt) );
    }

    prosConsStreamDiscusser( prompt: string, abortSignal: AbortSignal ) {
        return prosConsStreamUseCase(prompt, abortSignal);
    }

    translateText( prompt: string, lang: string ) {
        return from( translateTextUseCase(prompt, lang));
    }
}