import app from './app';

const port = process.env.PORT || 3333;

app.initialize().then(() => {
  const server = app.server.listen(port, () =>
    // eslint-disable-next-line no-console
    console.log(`Application running on port ${port}...`),
  );

  process.on('SIGTERM', () => {
    // eslint-disable-next-line no-console
    console.log('Closing application ...');
    server.close(async () => {
      // await app.connection.close();
      // eslint-disable-next-line no-console
      console.log('Application and database connection closed.');
    });
  });
});
