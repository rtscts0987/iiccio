export interface Movie {
  id: Number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: Number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
    returned: Number;
  };
  series: {
    available: Number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
    returned: Number;
  };
  stories: {
    available: Number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
        type: string;
      }
    ];
    returned: Number;
  };
  events: {
    available: Number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
    returned: Number;
  };
  urls: [
    {
      type: string;
      url: string;
    }
  ];
}
