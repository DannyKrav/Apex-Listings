INSERT INTO apex_users(
    username,
    password
) VALUES ($1,$2)
RETURNING *;
