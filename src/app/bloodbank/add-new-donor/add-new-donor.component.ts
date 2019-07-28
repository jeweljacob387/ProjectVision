import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BloodGroupEnum } from '../blood-group.enum';

@Component({
  selector: 'app-add-new-donor',
  templateUrl: './add-new-donor.component.html',
  styleUrls: ['./add-new-donor.component.scss']
})
export class AddNewDonorComponent implements OnInit {

  public bloodGroups = [];
  public dataForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.dataForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'houseName': new FormControl('', [Validators.required]),
      'isParishMember': new FormControl('', [Validators.required]),
      'contactNumber': new FormControl('', [Validators.required]),
      'alternateContactPerson': new FormControl('', [Validators.required]),
      'relation': new FormControl('', [Validators.required]),
      'alternateContactNumber': new FormControl('', [Validators.required])
    });
    for (const group in BloodGroupEnum) {
      if (isNaN(Number(group))) {
        this.bloodGroups.push({
          name: group,
          value: BloodGroupEnum[group]
        })
      }
    }
  }

  addNewDonor() {
  }

  addOrRemoveUnitName() {
    if (this.dataForm.controls.isParishMember.value) {
      this.dataForm.addControl('unitName', new FormControl('', [Validators.required]));
    } else {
      this.dataForm.removeControl('unitName');
    }
  }

}
