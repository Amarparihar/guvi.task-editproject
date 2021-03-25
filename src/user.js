import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./user-context";

function Users() {
  let users = useContext(UserContext);
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to="/create-user"
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>PermenentAddress</th>
                  <th>CurrentAddress</th>
                  <th>MobileNo.</th>
                  <th>AlternateNo</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                
              </tfoot>
              <tbody>
                {
                  users.userList.map((user)=>{
                   return <tr>
                  <td>
                      <Link to="/profile/1">{user.userName}</Link>
                  </td>
                  <td>{user.userEmail}</td>
                  <td>{user.userPAddress}</td>
                  <td>{user.userCAddress}</td>
                  <td>{user.userMobileNo}</td>
                  <td>{user.userAlternateNo}</td>
                  <td>
                    <Link
                      to={`/edit-user/${user.userName}`}
                      href="#"
                      class="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"
                    >
                      <i class="fas fa-download fa-sm text-white-50"></i> Edit
                    </Link>
                  </td>
                </tr>
              
                   })
                }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
