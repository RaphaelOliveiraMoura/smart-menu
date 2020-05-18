import app from './app';

app.initialize().then(() => {
  const server = app.server.listen(process.env.PORT, () =>
    // eslint-disable-next-line no-console
    console.log('Application running...'),
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
