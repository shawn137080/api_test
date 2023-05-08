module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            socketPath: env('INSTANCE_UNIX_SOCKET'),
            database: env('DB_NAME'),
            user: env('DB_USER'),
            password: env('DB_PASS'),
        }
    },
});
