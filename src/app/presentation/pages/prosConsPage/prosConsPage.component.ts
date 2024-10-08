import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent, TypingLoaderComponent, TextMessageBoxComponent } from '@components/index';
import { Message } from '@interfaces/message.interface';
import { OpenAIService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-pros-cons-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
  ],
  templateUrl: './prosConsPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProsConsPageComponent {

    public messages = signal<Message[]>([]);
    public isLoading = signal(false);
    public OpenAIService = inject( OpenAIService );

    handleMessage( prompt: string ) {
        this.isLoading.set(true);

        this.messages.update( (prev) => [
            ...prev,
            {
                isGpt: false,
                text: prompt,
            }
        ]);

        this.OpenAIService.prosConsDiscusser(prompt)
            .subscribe( resp => {

                this.isLoading.set(false);
                this.messages.update( prev => [
                    ...prev,
                    {
                        isGpt: true,
                        text: resp.content
                    }
                ]);
            });
    }
 }
