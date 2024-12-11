import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BecomeARenterComponent } from './navbar/become-a-renter/become-a-renter.component';
import { RentalDealsComponent } from './navbar/rental-deals/rental-deals.component';
import { HowItWorkComponent } from './navbar/how-it-work/how-it-work.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AllcarsComponent } from './allcars/allcars.component';
import { SearchComponent } from './search/search.component';
import { Allcars3Component } from './allcars3/allcars3.component';
import { Allcars2Component } from './allcars2/allcars2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RentNowDetailsComponent } from './rent-now-details/rent-now-details.component';
import { WhyChooseUsComponent } from './navbar/why-choose-us/why-choose-us.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component:HomeComponent, },
  { path: 'allcars', component:AllcarsComponent},
  { path: 'become-a-renter', component:BecomeARenterComponent},
  { path: 'rental-deals', component:RentalDealsComponent},
  { path: 'how-it-work', component:HowItWorkComponent},
  { path: 'why-choose-us', component:WhyChooseUsComponent},
  { path: 'allcars2', component:Allcars2Component},
  { path: 'allcars3', component:Allcars3Component},
  { path: 'rent-now-details', component:RentNowDetailsComponent},
  { path: 'sign-in', component:SignInComponent},
  { path: 'sign-up', component:SignUpComponent},
  { path: '**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
