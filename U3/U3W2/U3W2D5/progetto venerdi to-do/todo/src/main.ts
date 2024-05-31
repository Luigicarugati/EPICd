
import { AppModule } from './app/app.module';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));



/* L'opzione ngZoneEventCoalescing: true specifica che Angular dovrebbe raggruppare eventi multipli prima di eseguire
 il rilevamento delle modifiche. In altre parole, invece di rispondere immediatamente a ogni evento individuale
Angular attenderà un breve periodo di tempo per raggruppare gli eventi che si verificano in rapida successione
e poi eseguirà il rilevamento delle modifiche una sola volta. */
