import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConnectusComponent } from './connectus/connectus.component';




@NgModule({
  declarations: [HeaderComponent,FooterComponent,SidebarComponent, NavBarComponent, HomeComponent, AboutComponent, ConnectusComponent
 
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[HeaderComponent,FooterComponent,SidebarComponent,NavBarComponent,HomeComponent,AboutComponent,ConnectusComponent]
})
export class CoreModule { }
