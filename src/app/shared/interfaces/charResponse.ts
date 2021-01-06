export class CharResponse {
    "info": {
      "count": number,
      "pages": number,
      "next": string,
      "prev": string
    };
    "results": [
      {
        "id": number,
        "name": string,
        "status": string,
        "species": string,
        "type": string,
        "gender": string,
        "origin": LocationRef,
        "location": LocationRef,
        "image": string,
        "episode": string[],
        "url": string,
        "created": string
      }
    ]
}

export class LocationRef {
  url: string;
  name: string;
}
