import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from '@app/app.component';
import { routes } from '@app/app.routes';
import { JokeCardItemComponent } from '@app/components/joke-card-item/joke-card-item.component';
import { JokeCardListComponent } from '@app/components/joke-card-list/joke-card-list.component';
import { JokeDetailComponent } from '@app/containers/joke-detail/joke-detail.component';
import { JokesComponent } from '@app/containers/jokes/jokes.component';
import { RootStoreModule } from '@app/root-store';
import { ProductListComponent } from '@app/containers/product/list/product-list.component';
import { LayoutComponent } from '@app/containers/layout/layout.component';
import { MenuComponent } from '@app/components/menu/menu.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RootStoreModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    JokesComponent,
    JokeDetailComponent,
    JokeCardListComponent,
    JokeCardItemComponent,
    ProductListComponent,
    LayoutComponent,
    MenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
