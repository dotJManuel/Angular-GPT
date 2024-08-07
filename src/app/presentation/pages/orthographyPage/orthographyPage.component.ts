import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxEvent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TextMessageEvent, TypingLoaderComponent } from '@components/index';
import { Message } from '@interfaces/index';
import { OpenAIService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent,
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {

    public messages = signal<Message[]>([ { text: 'Hola mundo', isGpt: false } ]);
    public isLoading = signal(false);
    public OpenAIService = inject( OpenAIService );

    handleMessage( prompt: string ) {

    }

    handleMessageWithFile({ prompt, file }: TextMessageEvent) {
        console.log({prompt, file});
    }

    handleMessageWithSelect( event: TextMessageBoxEvent ) {
        console.log(event);
    }

}
