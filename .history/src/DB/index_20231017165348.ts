import { Connection, Request } from 'tedious';

const config = {
  server: 'your-server-name',
  authentication: {
    type: 'default',
    options: {
      userName: 'your-username',
      password: 'your-password',
    },
  },
  options: {
    database: 'your-database-name',
    encrypt: true,
  },
};

const connection = new Connection(config);

connection.on('connect', (err) => {
  if (err) {
    console.error('Connection failed:', err);
  } else {
    console.log('Connected to SQL Server.');
    const request = new Request('SELECT * FROM YourTable', (err, rowCount) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Query executed successfully. ${rowCount} rows returned.`);
      }
    });

    request.on('row', (columns) => {
      columns.forEach((column) => {
        console.log(`${column.metadata.colName}: ${column.value}`);
      });
    });

    connection.execSql(request);
  }
});

connection.connect();
