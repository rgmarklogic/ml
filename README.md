# lab

* build a `package.json` file with `npm`.
* require and save `express` as a dependency.
* serve the files in `public/` as static files.
* serve a history to requests to `chat?history=1`.
* The message history should have the format of:

    {
      "status": {
        "response": null,
        "error": false
      },
      "messages": [
        {
          "id": 118,
          "date": 1398888332071,
          "user": "user",
          "message": "hi"
        },
        {
          "id": 117,
          "date": 1398884025860,
          "user": "test",
          "message": "user is right aligned"
        }
      ]
    } 

* messages should always be an array even if the chat history is empty.
* id should increment by 1. 
* date should be a javascript date in milliseconds since the epoch.
* messages should be in reverse chronology (newest first).
* saves a message for requests to `chat?user=blah&message=blahblah`. Do not accept blanks.
* the response for updating a message should be of the format:

{
  "status": {
    "response": "Message added to the list.",
    "error": false
  },
  "messages": [
    {
      "id": 119,
      "date": 1399954579847,
      "user": "blah",
      "message": "blah"
    }
   ] 
}
* messages without both a `user` or `message` param should return a status with `error` set to true, but should still return a 200.

