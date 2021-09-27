import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SnippetsRoutingModule} from "./snippets-routing.module"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';



@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    SnippetsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormsComponent]
})
export class SnippetsModule { }
