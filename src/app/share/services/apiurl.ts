const url = {
  url: '',
};
const environment = {
  production: true,
};
if (environment.production) {
  url.url = 'https://testing.classdesign.us/';
} else {
  url.url = 'http://localhost/';
}
export const urls = {
  url: url.url,
  urlctagories: url.url + 'classapi/api/apiCategories.php',
  urlusers: url.url + 'classapi/api/apiUsers.php',
  urlContact: url.url + 'classapi/api/apiContact.php',
  urlProducts: url.url + 'classapi/api/apiProducts.php',
  urlOrders: url.url + 'classapi/api/apiOrders.php',
  urlImages: url.url + 'classapi/api/apiImages.php',
  urlStripe: url.url + 'classapi/core/stripe.php',
};
