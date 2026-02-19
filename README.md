# AngularGPT

Aplicacion frontend construida con **Angular 17** que integra multiples funcionalidades de OpenAI a traves de una interfaz de chat. Incluye correccion ortografica, traduccion, generacion de imagenes, conversion de audio y un asistente conversacional.

## Tecnologias

- **Angular 17.1** - Standalone components, signals, lazy loading
- **Tailwind CSS 3.4** - Estilos utility-first
- **RxJS** - Programacion reactiva
- **ngx-markdown** - Renderizado de markdown en respuestas
- **Font Awesome 6** - Iconografia

## Requisitos previos

- Node.js 18+
- Angular CLI 17 (`npm install -g @angular/cli`)
- Backend [nest-gpt](../nest-gpt) corriendo en `http://localhost:3000`

## Instalacion

```bash
npm install
ng serve
```

La aplicacion estara disponible en `http://localhost:4200/`.

## Funcionalidades

| Ruta | Descripcion |
|------|-------------|
| `/orthography` | Correccion ortografica y gramatical con puntuacion |
| `/pros-cons` | Comparar pros y contras de un tema |
| `/pros-cons-stream` | Pros y contras con respuesta en streaming |
| `/translate` | Traduccion de textos a otros idiomas |
| `/text-to-audio` | Convertir texto a audio con seleccion de voz |
| `/audio-to-text` | Transcripcion de archivos de audio a texto |
| `/image-generation` | Generacion de imagenes desde prompts |
| `/image-tunning` | Edicion y variaciones de imagenes |
| `/assistant` | Asistente conversacional con hilos de OpenAI |

## Estructura del proyecto

```
src/app/
├── core/
│   └── use-cases/           # Logica de negocio (llamadas al backend)
│       ├── orthography/
│       ├── pros-cons/
│       ├── translate/
│       ├── audios/
│       ├── image-generation/
│       └── assistant/
├── presentation/
│   ├── components/          # Componentes reutilizables
│   │   ├── chat-bubbles/    # Burbujas de mensaje (user/GPT)
│   │   └── text-boxes/      # Inputs de texto, archivos y selects
│   ├── layouts/             # Dashboard con sidebar
│   ├── pages/               # Paginas por funcionalidad
│   └── services/            # OpenAIService (wrapper de use cases)
├── interfaces/              # Tipos TypeScript
└── template/                # Template reutilizable de chat
```

## Arquitectura

- **Clean Architecture**: separacion entre `core` (logica de negocio) y `presentation` (UI)
- **Standalone Components**: todos los componentes son standalone (Angular 17+)
- **Signals**: manejo de estado reactivo con `signal()` y `update()`
- **Lazy Loading**: cada pagina se carga bajo demanda via `loadComponent`
- **OnPush Change Detection**: optimizacion de rendimiento en componentes

## Temas cubiertos

- Construccion de rutas (padre e hijas)
- Tailwind CSS
- Inputs, Outputs y referencias locales
- Formularios reactivos
- Seleccion y subida de archivos
- Diseno de interfaz de chat
- Interfaces y tipado
- Estructura de carpetas por capas
- Signals y estado reactivo
- Streaming de respuestas con generators
