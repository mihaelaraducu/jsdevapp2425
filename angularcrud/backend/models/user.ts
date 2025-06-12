import { User } from "./../types/User";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";
import { userInfo } from "os";
// Get all users
export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM jsusers`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const users: User[] = [];
    rows.forEach((row) => {
      const user: User = {
        id: row.id,
        nume: row.nume,
        prenume: row.prenume,
        email: row.email,
        datanastere: row.datanastere,
        telefon: row.telefon,
        cnp: row.cnp,
        poza: row.poza,
        dataadaugare: row.dataadaugare,
        status: row.status,
        actiune: "",
      };
      users.push(user);
    });
    callback(null, users);
  });
};
// Get one user
export const findOne = (userId: number, callback: Function) => {
  const queryString = `SELECT * FROM jsusers WHERE id=?`;
  db.query(queryString, userId, (err, result) => {
    if (err) {
      callback(err);
    }

    const row = (<RowDataPacket>result)[0];
    const user: User = {
      id: row.id,
      nume: row.nume,
      prenume: row.prenume,
      email: row.email,
      datanastere: row.datanastere,
      telefon: row.telefon,
      cnp: row.cnp,
      poza: row.poza,
      //dataadaugare: row.dataadaugare,
    };
    callback(null, user);
  });
};
// create user
export const create = (user: User, callback: Function) => {
  const queryString =
    "INSERT INTO jsusers (nume, prenume, email, datanastere, telefon, cnp, poza) VALUES (?, ?, ?, ?, ?, ?, ?)";
    console.log(user);
  db.query(
    queryString,
    [user.nume, user.prenume, user.email, user.datanastere, user.telefon, user.cnp, user.poza],
    (err, result) => {
      if (err) {
        callback(err);
      }
    
      
        const insertId = (<OkPacket>result).insertId;
        callback(null, insertId);
      
    }
  );
};

// update user
export const update = (user: User, callback: Function) => {
  const queryString = `UPDATE jsusers SET nume=?, prenume=?, telefon=?, cnp=?, poza=? WHERE id=?`;

  db.query(queryString, [user.nume, user.prenume, user.telefon, user.cnp, user.poza, user.id], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};
// delete user
export const deleteUser = (id: number, callback: Function) => {
  const queryString = `DELETE FROM jsusers WHERE id=?`;

  db.query(queryString, [id], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};

export const statusUser = (userInfo:any, callback: Function) => {
  let status = 1;
  if(userInfo.userStatus == 0){
    status = 1;
  }
  else{
    status = 0;
  }
  
  const queryString = `UPDATE jsusers SET status =? WHERE id=?`;

  db.query(queryString, [status,userInfo.userId], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};