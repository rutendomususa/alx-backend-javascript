/**
 * Contains the miscellaneous route handlers.
 * @author Rutendo Mususa<https://github.com/rutendomususa>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
