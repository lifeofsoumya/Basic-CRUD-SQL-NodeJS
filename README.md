## ENDPOINT calls doc
Create a new record:

```bash
Endpoint: POST /books
Request body: { "title": "Book Title", "author": "Book Author", "desc": "If you're reading even this book description, This is to remind you that keep hustling" }
```

### Read all records:
```bash
Endpoint: GET /books
```

### Read a single record:

```bash
Endpoint: GET /books/:id
Response body: { "id": 1, "title": "Book Title", "author": "Book Author", "desc": "Book desc" }
Update a record:
bash
```

### Update a book
```bash
Endpoint: PUT /books/:id
Request body: { "title": "New Book Title", "author": "New Book Author", "desc": "New Book desc" }
```

### Delete a Book
```bash
Endpoint: DELETE /books/:id
```