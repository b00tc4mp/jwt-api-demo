- hello

curl http://localhost:8080/hello

- register user

curl --header "Content-Type: application/json" \
  --request POST \
  --data '{ "name": "John Doe", "email": "johndoe@mail.com", "password": "123123123" }' \
  http://localhost:8080/api/users

  - authenticate user

curl --header "Content-Type: application/json" \
  --request POST \
  --data '{ "email": "johndoe@mail.com", "password": "123123123" }' \
  http://localhost:8080/api/users/auth

  - retrieve user

curl --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTI2MmUyZDczMTAyODZmNGJmMTA5OWEiLCJpYXQiOjE2Mjk4OTIyMzN9.N1JnNwQ58tIpd3PS0KpIj_AtjSW4ELpmnfvlIBw5pAo" \
  http://localhost:8080/api/users