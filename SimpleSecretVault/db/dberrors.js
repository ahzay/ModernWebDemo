module.exports = {
    checkTableExists: function (connection, tableName, callback) {
      connection.query(`SHOW TABLES LIKE "${tableName}"`, (err, rows) => {
        if (err) {
          callback(err);
        } else {
          const tableExists = rows.length > 0;
          callback(null, tableExists);
        }
      });
    },
    // doesn't work 
    // checkUserPermissions: function (connection, dbName, dbUser, callback) {
    //   connection.query(
    //     `SELECT * FROM mysql.db WHERE Db = '${dbName}' AND User = '${dbUser}'`,
    //     (err, rows) => {
    //       if (err) {
    //         callback(err);
    //       } else {
    //         if (rows.length === 0) {
    //           callback(new Error(`Permission error: '${dbUser}' does not have access to '${dbName}'.`));
    //         } else {
    //           const privileges = rows[0].Privileges;
    //           if (!privileges.includes('ALL PRIVILEGES')) {
    //             callback(new Error(`Permission error: '${dbUser}' does not have all privileges on '${dbName}'.`));
    //           } else {
    //             callback(null);
    //           }
    //         }
    //       }
    //     }
    //   );
    // },
  };
  