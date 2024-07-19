import React from 'react';
import Header from '../components/atoms/Header';
import CardList from '../components/organisms/CardList';

const razaCards = [
  {
    image: 'Bilboespa.webp',
    character: 'Hobbit',
    text: 'La raza más tranquila y de menor tamaño que vive en la comarca',
    btn: 'Click para ver',
  },
  {
    image: 'SDAAragorn.webp',
    character: 'Humano',
    text: 'Una de las razas más prósperas con varios reinos alrededor de la Tierra Media',
    btn: 'Click para ver',
  },
  {
    image: 'images (2).jpeg',
    character: 'Enanos',
    text: 'La raza mas ruda y grandes mineros que suelen vivir en grandes minas alrededor de la tierra media. ',
    btn: 'Click para ver'
},
{
  image: '565f96bba6dcebdff314e78c99b845ae.jpg',
  character: 'Elfos',
  text: 'La raza mas longeba y sabia de la tierra media recluida lejos de las demas razas. ',
  btn: 'Click para ver'
},
{
image: 'images.jpeg',
character: 'Magos',
text: 'La raza mas  enigmatica con solo tres mienbros y de ungran poder. ',
btn: 'Click para ver'
},
{
image: 'images (1).jpeg',
character: 'Orcos',
text: 'La raza que mayor peligro representa para toda la tierra media . ',
btn: 'Click para ver'
},
];

const peliculaCards = [
  {
    image: '91mtjGvPTvL._AC_UF894,1000_QL80_.jpg',
    character: 'El Hobbit un viaje inesperado',
    text: ' Bilbo Bolsón, un hobbit tranquilo, se une a un grupo de enanos liderados por Thorin Escudo de Roble en una misión para reclamar su hogar perdido en la Montaña Solitaria y su tesoro, custodiado por el dragón Smaug. En su viaje, Bilbo encuentra el Anillo Único y comienza su transformación de un simple hobbit en un héroe inesperado.',
    btn: 'Click para ver',
  },
  {
    image: '30e1f18cec0cef39c6f2333d133dcd44.jpg',
    character: 'El Hobbit la desolacion de smaug',
    text: 'Bilbo y los enanos continúan su viaje hacia la Montaña Solitaria, enfrentándose a peligros como los Elfos del Bosque Negro y las huestes de orcos. Bilbo se adentra en la guarida del dragón Smaug y toma una gema preciosa llamada Arkenstone, mientras Thorin lucha con la codicia y el deseo de recuperar su reino.',
    btn: 'Click para ver',
  },
  {
    image: 'hobb_qk1m.jpg',
    character: 'El Hobbit la batalla de los 5 ejercitos',
    text: 'Con el dragón Smaug derrotado, las diversas facciones de la Tierra Media se reúnen para reclamar el tesoro de la Montaña Solitaria. La disputa lleva a una gran batalla entre cinco ejércitos: hombres, elfos, enanos, orcos y wargs. Bilbo, atrapado en medio del conflicto, busca la paz y la reconciliación mientras la Tierra Media enfrenta una gran amenaza. ',
    btn: 'Click para ver'
},
{
  image: 'El_seanor_de_los_anillos_La_comunidad_del_anillo-952398002-large.jpg',
  character: 'El Señor de los anillos la comunidad del amillo',
  text: ' En la Tierra Media, un joven hobbit llamado Frodo Bolsón hereda un anillo con el poder de dominar a todos los seres. Con la ayuda de una comunidad formada por humanos, elfos, enanos y otros hobbits, Frodo emprende un peligroso viaje para destruir el anillo en el Monte del Destino y evitar que el oscuro señor Sauron recupere su poder.", que utiliza como fachada para sus actividades criminales. Es conocido por su apariencia impecable, su naturaleza calculadora y su capacidad para ocultar su verdadera naturaleza bajo una fachada de respetabilidad. ',
  btn: 'Click para ver'
},
{
image: 'El_seanor_de_los_anillos_Las_dos_torres-450612576-large.jpg',
character: 'El Señor de los anillos las dos torres',
text: 'La comunidad se ha disuelto y Frodo y Sam continúan su viaje hacia Mordor, guiados por Gollum, el antiguo portador del anillo. Mientras tanto, Aragorn, Legolas y Gimli luchan contra las fuerzas de Sauron y ayudan a defender el reino de Rohan contra el ejército de Saruman, otro hechicero oscuro ',
btn: 'Click para ver'
},
{
image: '71EVuWC5i0L._AC_UF894,1000_QL80_.jpg',
character: 'El Señor de los anillos el retorno del rey',
text: 'Frodo y Sam se acercan a Mordor para destruir el anillo, enfrentándose a desafíos crecientes. Aragorn, Legolas y Gimli se preparan para una última batalla épica para liberar la Tierra Media del dominio de Sauron. La batalla final en el campo de los campos de Pelennor y la destrucción del anillo marcan el fin de la era oscura. ',
btn: 'Click para ver'
},
];


const Home = () => (
    <>
      <Header />
    <div className="bg-orange-300 min-h-screen p-6">
      <div className="mb-6">
        <p className="text-2xl text-center font-bold mb-4">Razas</p>
        <CardList type="razas" cards={razaCards} />
      </div>
      <div className="mb-6">
        <p className="text-2xl text-center font-bold mb-4">Películas</p>
        <CardList type="peliculas" cards={peliculaCards} />
      </div>
    </div>
    </>
  );
  
  export default Home;
