# Test  Gaston Taborda

https://frontdesk.serfe.com/admin/supporttickets.php?action=viewticket&id=28282

# Test for new developer – Laravel / Angular

_Instructions to download and run the project_

## Starting 🚀

_These instructions will allow you to get a copy of the project running on your local machine for development and testing purposes._


### Instalación 🔧

_Install xampp (for my sql database and php)._

_Install composer_

_Install laravel with the following command:_
```
composer global require laravel/installer
```

_Install node.js_

_Install angular cli:_
```
npm install -g @angular/cli
```

_Clone the project._
```
git clone https://github.com/gastontab/proyecto-serfe.git
```

_Open xampp, start apache and my sql services, then go to localhost/phpmyadmin and create a new data base with the name gtbackend._

_In the folder gtbackend folder duplicate the file .env.example and rename it as .env_

_Open terminal in gtbackend folder and run the following commands:_
```
composer install
php artisan migrate --seed
php artisan serve (to run server)
```

_In other terminal run angular server (inside the gtfrontend folder):_
```
npm install
ng serve --open
```

_After executing the previous command, a new window will open with the main page_


## Built with 🛠️

_Tools used to build the project_

* [Angular](https://angular.io/docs) - Framework frontend
* [Angular material](https://material.angular.io/) - Framework css to Angular
* [Laravel](https://laravel.com/docs/8.x) - Framework php backend 
* [Git](https://git-scm.com/) - Version control system


## Autor ✒️

* **Gaston Taborda**
