# LAB - 37

## Redux Reducers

### Author: Jesse Van Volkinburg

### Links and Resources

- [submission PR](http://xyz.com)

### Setup

#### Running the app

**App**

- `npm start`

**Boxes**

- CREATE

```$xslt
{
  type: 'BOX_CREATE',
  payload: { id: 3, name: 'Box C8' }
}
```

- UPDATE

```$xslt
{
  type: 'BOX_UPDATE',
  payload: { id: 1, name:'newname' }
}
```

- DELETE

```$xslt
{
  type: 'BOX_DELETE',
  payload: { id: 3, name: 'newname' }
}
```

**Cats**

- CREATE

```$xslt
{
  type: 'CAT_CREATE',
  payload: { name: 'New Cat! Yay!', boxId: 2 }
}
```

- UPDATE (Does not work)

```$xslt
{
  type: 'CAT_UPDATE',
  payload: { id: 3, name:'newname', boxId: 1 }
}
```

- DELETE

```$xslt
{
  type: 'CAT_DELETE',
  payload: { id: 3 }
}
```

