import React from 'react';

const TableComponent = () => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Micheal Holz</td>
            <td>04/09/2020</td>
            <td>Admin</td>
            <td>Active</td>
            <td>Data 5</td>
          </tr>
          <tr>
            <td>Paula Wilson</td>
            <td>09/11/2021</td>
            <td>Publisher</td>
            <td>Active</td>
            <td>Data 10</td>
          </tr>
          <tr>
            <td>Antonio Moreno</td>
            <td>11/07/2022</td>
            <td>Publisher</td>
            <td>Suspended</td>
            <td>Data 10</td>
          </tr>
          <tr>
            <td>Mary savaley</td>
            <td>27/01/2019</td>
            <td>Reviewer</td>
            <td>Active</td>
            <td>Data 10</td>
          </tr>
          <tr>
            <td>Martin Sommer</td>
            <td>30/04/2023</td>
            <td>Moderator</td>
            <td>Inactive</td>
            <td>Data 10</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
