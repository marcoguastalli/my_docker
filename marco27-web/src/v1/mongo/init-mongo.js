// db.getSiblingDB () is equivalent to use admin;
db.getSiblingDB('admin')
    .createUser({
        user: 'mongo-admin',
        pwd: 'qwerty',
        roles: [
            {
              role: "userAdminAnyDatabase",
              db: "admin"
            }
        ]
});