# Dokumentation
Wir haben von der Schule den Auftrag bekommen eine App mit React zu erstellen, mit der man aus einem Json-Server Daten ausgeben kann, bearbeiten, löschen und hinzufügen. 
Als erstes haben Mark und ich mit dem Design der CRUD App angefangen. Wir haben es mit dem Marvel Tool gemacht. Ein Tool, welches, bis man seine Arbeit herunterladen möchte völlig Kosten frei ist.

Wie am Titel unschwer zu erkennen ist handelt es isch hier um die Verwaltungsseite von Up in The Sky. Rechts oben ist ein Button zu erkennen, welcher wieder zur Wunschlist führt. Unterhalb davon hat es 3 Input-Felder, mit welchen man neue Einträge hinzufügen kann. Zuunterst findet man die eingetragenen Daten und die Möglichkeit die Daten zu editieren und zu löschen. 
Das war der Plan und ein ungefähres Design wie die Seite aussehen könnte. Jedoch haben wir uns dazu entschieden das Framework React-Admin zu nutzen. 

npm install react-admin
 
Mit den Befehlen auf dem Foto lässt sich die Bibliothek für React einfach und schnell installieren. Die Bibliothek beinhaltet verschiedene Features. Es nutzt unteranderem Material UI oder den React Router, Redux und React-final-form. Es wird genutzt, um Dashboards einfach zu erstellen und gestalten. 
Wir haben es in unserer App verwendet, um ein Dashboard zu gestalten, mit dem man Flüge direkt bearbeiten, Löschen und hinzufügen kann. Das war nicht ganz einfach, da wir das Framework vorher selbst nicht genutzt hatten. Wir haben uns also mit Recherchieren auf verschiedenste Art und weisen informiert. 
Wir haben einen JSON-Server mit den verschiedenen Flügen erstellt. Im db.JSON File findet man alle Daten, die eingegeben werden. Den JSON-Server startet man, indem man Projektverzeichnis im Terminal eingibt: npm run server. Der JSON-Server wird gestartet und ist auf dem Port localhost:5000 zu finden.
Jetzt kann man mit einem neuen Terminal in das Clientverzeichnis wechseln. Mit dem Befehl: npm run client sollte die Applikation starten. Diese ist, wenn sie sich nicht von allein öffnet auf dem Port localhost:3000 zu finden. 
Wir haben es leider nicht geschafft die Wunschliste so zu gestalten, wie wir uns das vorgestellt hatten. Die App funktioniert leider auch noch nicht ganz so wie wir uns das vorgestellt haben.
Wir haben aus Platz gründen die Node-Modules gelöscht. Diese kann man jedoch ganz einfach mit dem Befehl: npm install wieder installieren. Die Modules befanden sich zum einen im Client Ordner und zum anderen im Projekt Ordner.







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
