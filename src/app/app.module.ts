import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialLibraryModule } from 'src/material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeveloperComponent } from './developer/developer.component';
import { DeveloperListComponent } from './developer/developer-list/developer-list.component';
import { MenuComponent } from './shared/menu/menu.component';
import { DeveloperPreviewComponent } from './shared/developer-preview/developer-preview.component';
import { DeveloperItemComponent } from './developer/developer-item/developer-item.component';
import { DeveloperEditComponent } from './developer/developer-edit/developer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    DeveloperListComponent,
    MenuComponent,
    DeveloperPreviewComponent,
    DeveloperItemComponent,
    DeveloperEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialLibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
