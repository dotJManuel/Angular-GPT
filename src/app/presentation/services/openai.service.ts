import { Injectable } from '@angular/core';
import { from, Observable, of, tap } from 'rxjs';
import { auidoToTextUseCase, createThreadUseCase, imageGenerationUseCase, orthographyUseCase, postQuestionUseCase, prosConsStreamUseCase, prosConsUseCase, textToAudioUseCase, translateTextUseCase } from 'use-cases/index';
import { imageVariationUseCase } from '../../core/use-cases/image-generation/image-variation.use-case';

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

    textToAudio( prompt: string, voice: string ) {
        return from( textToAudioUseCase(prompt, voice));
    }

    audioToText( file: File, prompt: string ) {
        return from( auidoToTextUseCase(file, prompt));
    }

    imageGeneration( prompt: string, originalImage?: string, maskImage?: string ) {
        return from( imageGenerationUseCase(prompt, originalImage, maskImage ));
    }

    imageVariation( originalImage: string ) {
        return from( imageVariationUseCase( originalImage) );
    }

    createThread(): Observable<string> {

        if( localStorage.getItem('thread') ) {
            return of(localStorage.getItem('thread')!);
        }

        return from( createThreadUseCase() )
            .pipe(
                tap(( thread ) => {
                    localStorage.setItem('thread', thread);
                })
            );
    }

    postQuestion( threadId: string, question: string ) {
        return from( postQuestionUseCase( threadId, question ));
    }
}