# Speakfree

An interactive version of spoken boards. Does not require a carer to use.

### Getting Started

Install `http-server`:

```
npm install -g http-server
```

Generate SSL Certificates and Keys:

```
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

Start `http-server` using SSL:

```
http-server -S
```

> `http-server` will look for a `key.pem` and `cert.pem` in your current directory.

Use the application at https://localhost:8080.
