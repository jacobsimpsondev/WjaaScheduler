import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"wjaa-scheduler-e976e","appId":"1:220470761847:web:1ea99789c3c6089776e972","storageBucket":"wjaa-scheduler-e976e.firebasestorage.app","apiKey":"AIzaSyDp6VnUhKyL-bX-7FtioTL3BKBKxFrDNWE","authDomain":"wjaa-scheduler-e976e.firebaseapp.com","messagingSenderId":"220470761847","measurementId":"G-TN1W8HFD2M"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore())]
};
