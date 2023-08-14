// Look how complicated this is! We're nesting so much, and each error handle is repetative 
// What if we could somehow use a return value instead of having to use callbacks and passing arguments?
getServerResponse(url, (error, response) => {
    if (error) {
      console.error(error);
      return error
    }
    formatServerResponse(response, (error, formattedResponse) => {
      if (error) {
        console.error(error);
        return error;
      }
      getServerResponse(`http://some-url.com/${formattedResponse}`, (error, response) => {
        if (error) {
          console.error(error);
          return;
        }
        formatServerResponse(response, (error, formattedResponse) => {
          if (error) {
            console.error(error);
            return error
          }
          displayResponse(formattedResponse, (error) => {
            if (error) {
              console.error(error);
              return error
            }
            console.log('Done!');
          });
        });
      });
    });
  });