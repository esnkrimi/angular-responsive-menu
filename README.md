------------------DEMO--------------------

  	  https://esn-menu.stackblitz.io
------------------INSTALLATION--------------------

    npm i esn-menu --force

    import { EsnMenuModule } from 'esn-menu'

    Also,you should install bootstrap 

        npm i bootstrap  // version 4.1.3 prefferd

    and import bootstrap bundle in angular.json(or using popperJs):

         "styles": [
              "src/styles.sass",
              "node_modules/bootstrap/dist/css/bootstrap.css"

            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.js",
              "node_modules/bootstrap/dist/js/bootstrap.bundle.js"

            ]
------------------USAGE--------------------

---------Template html file

      <esnMenu 
        [themeColor]="themeColor" 
        [textColor]="textColor" 
        [data]="data"
        [fixed]="fixed"//position fixed on top (0,0)
      >
      </esnMenu>
---------ts file

        data =
        ['Home', 
        ['products',['bag', 'mobile','labtob']],
        'Contact us',
        ['sizes',[ 'large', 'small','medium']],

        themeColor='#554455';//Background color of menu
        textColor='yellow';//Text color of menu items
        fixed=false;
 