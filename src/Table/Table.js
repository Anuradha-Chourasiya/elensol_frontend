import React from 'react';

const TableComponent = () => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <th>1</th>
            <td><img src="./Images/human.png" style={{width:'30px', height:'30px'}}/>  Micheal Holz</td>
            <td>04/09/2020</td>
            <td>Admin</td>
            <td><img src="./Images/green.png" style={{width:'17px', height:'17px'}}/> Active</td>
            <td><img src="./Images/setting.png" style={{width:'20px', height:'20px'}}/>&nbsp;
            <img src="./Images/delete.jfif" style={{width:'20px', height:'20px'}}/> </td>
          </tr>
          <tr>
          <th>2</th>
            <td><img src="./Images/women.png" style={{width:'30px', height:'30px'}}/> Paula Wilson</td>
            <td>09/11/2021</td>
            <td>Publisher</td>
            <td><img src="./Images/green.png" style={{width:'17px', height:'17px'}}/> Active</td>
            <td><img src="./Images/setting.png" style={{width:'20px', height:'20px'}}/>&nbsp;
            <img src="./Images/delete.jfif" style={{width:'20px', height:'20px'}}/></td>
          </tr>
          <tr>
          <th>3</th>
            <td><img src="./Images/human.png" style={{width:'30px', height:'30px'}}/> Antonio Moreno</td>
            <td>11/07/2022</td>
            <td>Publisher</td>
            <td><img src="./Images/red.png" style={{width:'15px', height:'15px'}}/> Suspended</td>
            <td><img src="./Images/setting.png" style={{width:'20px', height:'20px'}}/>&nbsp;
            <img src="./Images/delete.jfif" style={{width:'20px', height:'20px'}}/></td>
          </tr>
          <tr>
          <th>4</th>
            <td><img src="./Images/women.png" style={{width:'30px', height:'30px'}}/> Mary savaley</td>
            <td>27/01/2019</td>
            <td>Reviewer</td>
            <td><img src="./Images/green.png" style={{width:'17px', height:'17px'}}/> Active</td>
            <td><img src="./Images/setting.png" style={{width:'20px', height:'20px'}}/>&nbsp;
            <img src="./Images/delete.jfif" style={{width:'20px', height:'20px'}}/></td>
          </tr>
          <tr>
          <th>5</th>
            <td><img src="./Images/human.png" style={{width:'30px', height:'30px'}}/> Martin Sommer</td>
            <td>30/04/2023</td>
            <td>Moderator</td>
            <td><img src="./Images/yellow.png" style={{width:'10px', height:'10px'}}/> Inactive</td>
            <td><img src="./Images/setting.png" style={{width:'20px', height:'20px'}}/>&nbsp;
            <img src="./Images/delete.jfif" style={{width:'20px', height:'20px'}}/></td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
