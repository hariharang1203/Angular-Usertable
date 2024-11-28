import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm!: FormGroup;
  users: any[] = [];
  displayedUsers: any[] = [];
  currentIndex: number = 0;

  // To track which user is being edited
  editingIndex: number | null = null;  // Initially no row is being edited

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Initialize form with validations
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required],
      course: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required]
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      this.users.push(user);  // Add the user to the users array
      this.userForm.reset();  // Reset the form after saving
    }
  }

  // Method to display the next user from the users array
  addList() {
    
    if (this.currentIndex === this.users.length) {
      // Create a new user object with default fields
      const newUser = {
        firstname: '',
        lastname: '',
        age: null,
        gender: '',
        course: '',
        email: '',
        number: '',
        address: ''
      };
      this.displayedUsers.push(newUser); // Add the new empty user object
    } else if (this.currentIndex < this.users.length) {
      // Add an existing user from the users array
      const userToDisplay = { ...this.users[this.currentIndex] }; // Create a copy of the user object
      this.displayedUsers.push(userToDisplay);
      this.currentIndex++; // Increment the index
    }
  }
  

  // Method to clear the form fields
  clearUser() {
    this.userForm.reset();
  }

  // Method to delete a user from the displayed list
  deleteUser(index: number) {
    this.displayedUsers.splice(index, 1);
    this.checkedUsers.splice(index, 1);
  }

  // Method to toggle the edit mode for a user
  editUser(index: number) {
    // Toggle edit mode for the user: if already editing, switch back to view mode
    if (this.editingIndex === index) {
      this.editingIndex = null;  // Exit edit mode
    } else {
      this.editingIndex = index;  // Enter edit mode for the clicked row
    }
  }

  // Method to save the updated user details directly in the table
  saveUser(index: number, updatedUser: any) {
    this.displayedUsers[index] = updatedUser;  // Update the user in the table
    this.editingIndex = null;  // Exit edit mode after saving
  }

  checkedUsers: any[] = []; // To store checked users

onCheckboxChange(event: any, user: any) {
  if (event.target.checked) {
    // Add user to the checkedUsers array if checked
    this.checkedUsers.push(user);
  } else {
    // Remove user from the checkedUsers array if unchecked
    this.checkedUsers = this.checkedUsers.filter(u => u !== user);
  }
  
}

}
