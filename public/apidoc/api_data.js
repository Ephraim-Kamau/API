define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "API Status",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>API Status' message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\"status\": \"Food API\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Status",
    "name": "Get"
  },
  {
    "type": "delete",
    "url": "/tasks/:id",
    "title": "Remove a task",
    "group": "Tasks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "\n{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Task id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/tasks.js",
    "groupTitle": "Tasks",
    "name": "DeleteTasksId"
  },
  {
    "type": "get",
    "url": "/tasks",
    "title": "List the user's tasks",
    "group": "Tasks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "\n{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tasks",
            "description": "<p>Task list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>Task id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "tasks.done",
            "description": "<p>Task is done?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tasks.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tasks.created_at",
            "description": "<p>Register's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.user_id",
            "description": "<p>Id do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP/1.1 200 OK\n\n[{\n\n\"id\": 1,\n\n\"title\": \"Study\",\n\n\"done\": false\n\n\"updated_at\": \"2016-02-10T15:46:51.778Z\",\n\n\"created_at\": \"2016-02-10T15:46:51.778Z\",\n\n\"user_id\": 1\n\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "\nHTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/tasks.js",
    "groupTitle": "Tasks",
    "name": "GetTasks"
  },
  {
    "type": "get",
    "url": "/tasks/:id",
    "title": "Get a task",
    "group": "Tasks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "\n{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Task id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Task id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "done",
            "description": "<p>Task is done?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Register's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP/1.1 200 OK\n\n{\n\n\"id\": 1,\n\n\"title\": \"Study\",\n\n\"done\": false\n\n\"updated_at\": \"2016-02-10T15:46:51.778Z\",\n\n\"created_at\": \"2016-02-10T15:46:51.778Z\",\n\n\"user_id\": 1\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Task not found error",
          "content": "\nHTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "\nHTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/tasks.js",
    "groupTitle": "Tasks",
    "name": "GetTasksId"
  },
  {
    "type": "post",
    "url": "/tasks",
    "title": "Register a new task",
    "group": "Tasks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "\n{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Task title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "\n{\"title\": \"Study\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Task id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "done",
            "defaultValue": "false",
            "description": "<p>Task is done?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Register's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP/1.1 200 OK\n\n{\n\n\"id\": 1,\n\n\"title\": \"Study\",\n\n\"done\": false,\n\n\"updated_at\": \"2016-02-10T15:46:51.778Z\",\n\n\"created_at\": \"2016-02-10T15:46:51.778Z\",\n\n\"user_id\": 1\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "\nHTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/tasks.js",
    "groupTitle": "Tasks",
    "name": "PostTasks"
  },
  {
    "type": "put",
    "url": "/tasks/:id",
    "title": "Update a task",
    "group": "Tasks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "\n{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Task id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "done",
            "description": "<p>Task is done?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "\n{\n\n\"title\": \"Work\",\n\n\"done\": true\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "\nHTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/tasks.js",
    "groupTitle": "Tasks",
    "name": "PutTasksId"
  }
] });
