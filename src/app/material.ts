import { NgModule } from "@angular/core";
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatTableModule } from "@angular/material";

@NgModule({    
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatNativeDateModule,
        MatTableModule,
        MatIconModule
        ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatNativeDateModule,
        MatTableModule,
        MatIconModule
    ]
})

export class MaterialModule { }