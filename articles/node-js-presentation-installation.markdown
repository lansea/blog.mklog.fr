Title: Node.js: Présentation, installation et prise en main
Author: Mickael Daniel
Date: Nov 16 2010 23:46:00 GMT-0500 (CDT)
Note: This post is an import from an older wordpress post, as a results not markdown formated
Categories: Javascript, node.js

<img class="mk-blog-img" src="/node/node1.png"></img>

Comme introduit précédemment dans le <a href="blog.mklog.fr/2010/11/13/introduction-a-node-js/">post de présentation consacré à cette série</a>, nous allons aujourd'hui nous intéresser à l'installation de Node sur notre machine et à sa prise en main. A la fin de cet article, vous aurez une installation Node complètement fonctionnelle de laquelle vous pourrez concevoir des tas d'applications basées sur ce fantastique framework. Mais avant de rentrer dans le vif du sujet, j'ai pensé qu'il était intéressant et important de définir Node, ce qui le caractérise et fait qu'il rencontre le succès qu'il connaît aujourd'hui.
<div class="clear"></div>
<!--more-->

<h2>Node.js, c'est quoi?</h2>
Alors Node.js, c'est quoi? On peut commencer par dire qu'il represente le 3e projet le plus suivi sur Github (Juste derrière Rails et jQuery). Et c'est une tendance qui ne risque pas de s'arrêter:

<img class="mk-blog-img-center" src="/node/github-popular1.png" alt="Github: Third most popular project!" />

Au premier abord, Node ressemble juste à une autre implémentation du Javascript coté serveur, mais c'est beaucoup, beaucoup plus intéressant que cela. Il s'appuie sur l'excellent support du Javascript pour la programmation basée sur les évènements et s'en sert pour créer quelque chose qui utilise et "embrasse" vraiment les points forts du langage.

Node.js est un projet open-source géré par <a href="https://github.com/ry">Ryan Dahl</a> et soutenu par <a href="http://www.joyent.com/">Joyent</a>. Le projet se décrit lui-même comme "evented I/O for V8 Javascript" (E/S évènementielle pour le moteur Javascript V8). C'est un framework vous permettant de concevoir des applications réseaux extrêmement rapides, efficaces et performantes, spécialement dans des contextes hautement concurrent. Il permet vraiment une programmation basée sur les événements (event-driven) et de manière non bloquante (toutes les E/S sont traitées de manière non bloquante). Pensez à quelque chose de similaire à Twisted ou EventMachine, mais pour Javascript au lieu de Python ou Ruby.

<img class="mk-blog-img" src="/node/nodejsarch.png" alt="nodeJS Architecture globale" />

Ceci est complètement différent (si ce n'est à l'opposé) des méthodologies plus communes employées jusqu'alors, où les threads OS sont employés pour gérer de nombreuses requêtes et où les E/S sont synchrones (bloquantes).

Là ou Node est particulièrement brillant, c'est dans son modèle de programmation. Contrairement aux serveurs traditionnels type Apache ou IIS, Ryan Dahl adopte une approche complètement différente. Node, contrairement aux autres solutions plus classiques qui utilisent des thread OS pour gérer de multiples connexion, prend le parti de n'utiliser qu'un seul thread, dans une boucle d'événements.

Node montre de bien meilleurs performances mémoires sous de fortes charges que les système qui allouent un thread par connexion (Cas d'Apache, n'est pas le cas de nginx. Pour plus d'infos et de chiffres sur le sujet: <a href="http://blog.webfaction.com/a-little-holiday-present">A little holiday present: 10,000 reqs/sec with Nginx!</a>.). 

Là où Node se démarque également, c'est dans la gestion des E/S qui sont toutes non bloquantes (toutes pas vraiment, certains processus OS complexes restent bloquants mais il ne sont pas légion). Ryan explique très bien le fait que dans la plupart des applications, vous passez la majeure partie de votre temps et gaspillez de nombreux cycles horloges à juste attendre... Node lui vous apprendra et vous forcera à penser de façon asynchrone, on n'écrit plus:
<script src="https://gist.github.com/701141.js"> </script>

Mais:
<script src="https://gist.github.com/701165.js"> </script>

Les utilisateurs de Node n'auront pas à se soucier de problème de dead-lock. Pratiquement aucune fonctionnalité de Node n'a recourt directement aux E/S, le processus ne bloque donc jamais. Puisque rien n'est bloquant, il est facile, même pour les développeur loin d'être expert, d'écrire des programmes très rapide et scalable. 

D'un point de vue plus personnel, c'est vraiment le projet le plus excitant et le plus enthousiasmant sur lequel j'ai eu l'occasion de développer depuis un loooooooong moment. Il est le coupable de nombreuses heures de sommeil perdues tellement je prends plaisir à développer avec Node.js.

<h3>Ce que Node.js n'est pas</h3>
Reprenant l'accroche de l'excellent article paru récemment sur <a href="http://dailyjs.com/2010/11/12/node-is-not/">dailyJS</a>, il est également important de souligner ce que Node n'est pas:
<ul>
	<li>La seule solution WebSocket.</li>
	<li>La solution magique à tous nos problèmes.</li>
	<li>Une pile applicative Web complète (a la Ruby On Rails). Mais on peut l'avoir!
<ul>
	<li><a href="http://expressjs.com/">Express.js</a>: Framework Web complet (inspiré par <a href="http://www.sinatrarb.com/">Sinatra</a>).</li>
	<li><a href="https://github.com/senchalabs/connect">Connect</a>: Bibliothèque de composants middleware pour Node and Express (a la Rack).</li>
	<li><a href="https://github.com/visionmedia/haml.js">haml.js</a>: Pure implémentation de <a href="http://haml-lang.com/">Haml</a> en JS (De nombreux autres système de template existent également: Jade, ejs, etc.)</li>
</ul>
</li>
	<li>Efficace à envoyer de larges fichiers statiques dans un contexte concurent (utiliser nginx).
          <ul>
            <li>L'implémentation récente du Buffer améliore grandement ce problème.</li>
          </ul>
        </li>
        <li>Complètement non-bloquant.
           <ul>	
             <li>Quelques processus intensif en CPU sont toujours fait en mode bloquant.</li>
             <li>Quelques processus système.</li>
           </ul>
        </li>
</ul>

Nous arrêterons là le chapitre de "présentation" de Node pour nous consacrer au but de cette article: Installation de la solution et prise en main. Je me contenterais de vous fournir une liste de liens (blogs et conférences) qui présentent bien mieux et bien plus en détail la technologie que je n'ai pu le faire. Je souhaite juste avoir réussi à vous transmettre l'enthousiasme que je ressens autour de ce projet (ou du moins vous avoir donné envie de creuser).

<h2>Installation</h2>
Alors, pour commencer, un peu comme git, si vous êtes sous Windows, vous aurez un peu plus (beaucoup plus?) de mal que les utilisateurs Mac ou Linux à commencer. Cet article se bornera à vous présenter les manips sous système Unix, mais si vous voulez persévérer coté Windows, voici quelques liens qui pourraient vous intéresser:
<ul>
 	<li> Cygwin: 
           <ul>
             <li><a href="https://github.com/ry/node/wiki/Building-node.js-on-Cygwin-(Windows)">Building node.js on Cygwin (Windows)</a></li>
	    <li><a href="http://codebetter.com/blogs/matthew.podwysocki/archive/2010/09/07/getting-started-with-node-js-on-windows.aspx">Getting Started with Node.js on Windows</a></li>
            <li><a href="http://boxysystems.com/index.php/step-by-step-instructions-to-install-nodejs-on-windows/">Step by step instructions to install NodeJS on Windows</a></li>
          </ul>
        </li>
	<li>VM/Portable Ubuntu
          <ul>
            <li><a href="http://vwxyz.posterous.com/how-to-install-nodejs-on-windowsno-vmwareport">Getting started with node.js on windows</a></li>
	<li><a href="http://www.psychocats.net/ubuntu/virtualbox">Installing Ubuntu inside Windows using VirtualBox</a></li>
            <li><a href="https://github.com/ry/node/wiki/Installation-on-Windows-XP-(through-Portable-Ubuntu-TRES)">Installation on Windows XP (through Portable Ubuntu TRES)</a></li>
          </ul>
        </li>
	<li>
          <em>Edit(19/11): Vous trouverez sûrement un intérêt à cette alternative Cygwin/VM: <a href="http://node-js.prcn.co.cc/">http://node-js.prcn.co.cc/</a>. Node sous windows sans installer cygwin. Merci Philippe pour le retour! (et le tuto en 3 lignes <span rt-90>;)</span>)</em>
        </li>
</ul>

Si je devais faire du node sur Windows, je choisirais probablement la méthode VM (Avec VirtualBox). L'utilisation de Cygwin est une option viable, c'est principalement une question de goût. Vous devrez toujours installer et configurer Cygwin. Je préfère avoir, même virtualisé, mon install Node sur une distrib linux native. De plus, on rapproche ainsi notre environnement de dev. de notre environnement de prod. (qui sera hébergé) et rien ne nous empêche d'utiliser notre VM dans le seul but d'héberger Node, et développer depuis la "machine hôte".

<h2>Installation</h2>
Node s'installe à partir des sources, le processus est très simple. Les dépendances de Node sont inclus et l'installation se résume en trois lignes de commande.

La première chose à faire est de récupérer la dernière version stable de <a href="http://nodejs.org/#download">Node</a>. Vous pouvez aussi utiliser git et cloner le projet sur un repository local:
<script src="https://gist.github.com/702405.js"> </script>

Une fois le répertoire node est ses sources prêt, se placer à la racine et exécuter successivement les trois commandes suivantes:
<script src="https://gist.github.com/702382.js"> </script>
 
Le première devrait vous donner quelque chose comme: 
<img class="mk-blog-img-center" src="/node/screen-node-configure-e1289939993766.png" alt="./configure" />

Ceci permet au système de déterminer l'architecture de la machine et les librairies disponible sur le système, et de les faire correspondre avec celles exigées par le programme, juste avant la compilation de son code source.

Les deux dernière commandes servent à compiler les sources de Node et à l'installer sur votre environnement. Un grand nombre de messages défileront pendant que Node est compilé et installé (Le processus peut prendre un peu de temps):
<img class="mk-blog-img-center" src="/node/screen-node-make-e1289941130397.png" alt="make && make install" />

Vous devriez pouvoir taper "node -v" ou "node --version", ce qui devrait vous retourner le numéro de version de Node que vous venez d'installer.

L'installation n'est vraiment pas compliquée (pour peu qu'on soit sous sytème Unix <span rt-90>;)</span>), trois lignes de commande et Node est installé. On peut désormais créer notre toute première application Node (et le mythique Hello World!).

<h2>Prise en main</h2>
Créons un simple fichier server.js:
<script src="https://gist.github.com/702388.js"></script>

Ce script importe le module http et crée un serveur HTTP. La fonction anonyme qui est passé dans la méthode http.createServer sera appelé dès qu'une requête entrante arrive au serveur, celui-ci écoutant sur le port 8080. A chaque requête, la fonction passée en paramètre a createServer reçoit deux paramètres correspondant à l'objet request et response. Dans ce script, nous envoyons d'abord les en-tête HTTP avec le content-type et le status code (200: succesful). puis le message "Hello World!". Remarquez l'utilisation de la méthode .end qui permet de spécifier au serveur que nous souhaitons clore la connexion HTTP.

Si vous lancer la commande "node server.js" et aller faire un tour sur votre navigateur, vous devriez voir:
<img class="mk-blog-img-center" src="/node/screen-hello-e1289941585163.png" alt="Hello Node!" />

Et voilà, nous avons une installation de Node fonctionelle et avons créé notre toute première application.

Félicitations et bienvenue dans l'avenir du développement web!

<em style="font-size: 0.9em;">Edit(19/11): Pour les Windows User, vous trouverez sûrement un intérêt à cette alternative Cygwin/VM: <a href="http://node-js.prcn.co.cc/">http://node-js.prcn.co.cc/</a>. Node sous windows sans installer cygwin. Merci Philippe pour le retour! (et le tuto en 3 lignes <span rt-90>;)</span>)</em>