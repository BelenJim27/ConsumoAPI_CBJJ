import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule, HttpClientModule, MatTableModule,MatPaginator],
  providers: [UserService],
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  paginatedUsers: any[] = [];
  pageSize = 5;
  pageIndex = 0;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService) {}
 
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.updatePaginatedUsers();
    });
  }

  updatePaginatedUsers() {
    const startIndex = this.pageIndex * this.pageSize;
    this.paginatedUsers = this.users.slice(startIndex, startIndex + this.pageSize);
  }
/**
   * Maneja los cambios en la paginación y actualiza la sublista de usuarios.
   * @param event Evento de cambio de página
   */
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedUsers();
  }
}