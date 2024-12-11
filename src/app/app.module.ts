import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { RentalDealsComponent } from './navbar/rental-deals/rental-deals.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BecomeARenterComponent } from './navbar/become-a-renter/become-a-renter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HowItWorkComponent } from './navbar/how-it-work/how-it-work.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {HttpClientModule} from '@angular/common/http';
import { AllcarsComponent } from './allcars/allcars.component';
import { Allcars2Component } from './allcars2/allcars2.component';
import { Allcars3Component } from './allcars3/allcars3.component';
import { HowItWorkSectionComponent } from './how-it-work-section/how-it-work-section.component';
import { WhyChooseUsSectionComponent } from './why-choose-us-section/why-choose-us-section.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { RentNowDetailsComponent } from './rent-now-details/rent-now-details.component';
import { WhyChooseUsComponent } from './navbar/why-choose-us/why-choose-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    RentalDealsComponent,
    ContactUsComponent,
    FooterComponent,
    NotfoundComponent,
    BecomeARenterComponent,
    NavbarComponent,
    HowItWorkComponent,
    SignInComponent,
    SignUpComponent,
    AllcarsComponent,
    Allcars2Component,
    Allcars3Component,
    HowItWorkSectionComponent,
    WhyChooseUsSectionComponent,
    TestimonialsComponent,
    RentNowDetailsComponent,
    WhyChooseUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
