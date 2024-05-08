# Dating app

## run the server

dotnet watch --no-hot-reload

## to run the latest migrations script

dotnet ef database update

## to drop the table

dotnet ef database drop

## SSL

We are using mkcert for local dev ssl
install it with choco then, make a folder to put the certs, cd into it, mkcert -install then, mkcert localhost
