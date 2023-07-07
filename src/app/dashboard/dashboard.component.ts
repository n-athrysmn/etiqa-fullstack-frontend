import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { UserService } from '../data.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  editedUser: any = {};

  @ViewChild('editUserDialog') editUserDialog!: TemplateRef<any>;
  editUserDialogRef!: MatDialogRef<any>;

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      response => {
        this.users = response.users;
      },
      error => {
        console.log('Error fetching users:', error);
      }
    );
  }

  openEditDialog(user: any) {
    this.editedUser = { ...user }; // Set the editedUser object to the selected user's data
    this.editUserDialogRef = this.dialog.open(this.editUserDialog);
  }
  

  saveEdit() {
    this.userService.updateUser(this.editedUser._id, this.editedUser).subscribe(
      response => {
        if (response.status) {
          this.getUsers(); // Refresh the user list after successful update
        } else {
          console.log('Update failed:', response.message);
        }
      },
      error => {
        console.log('Error updating user:', error);
      }
    );
  
    this.editUserDialogRef.close(); // Close the dialog
  }
  
  

  deleteUser(userId: string) {
    // Perform the delete user logic here
    // Call the API to delete the user with userId
    // Refresh the user list after successful deletion
    this.userService.deleteUser(userId).subscribe(
      response => {
        if (response.status) {
          this.getUsers();
        } else {
          console.log('Delete failed:', response.message);
        }
      },
      error => {
        console.log('Error deleting user:', error);
      }
    );
  }
}
