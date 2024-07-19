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
    text: 'La primera película de la trilogía del Hobbit.',
    btn: 'Click para ver',
  },
  {
    image: '30e1f18cec0cef39c6f2333d133dcd44.jpg',
    character: 'El Hobbit la desolacion de smaug',
    text: 'La segunda película de la trilogía del Hobbit.',
    btn: 'Click para ver',
  },
  {
    image: 'hobb_qk1m.jpg',
    character: 'El Hobbit la batalla de los 5 ejercitos',
    text: 'Gus es un empresario de la droga y dueño de la cadena de restaurantes de pollo frito "Los Pollos Hermanos", que utiliza como fachada para sus actividades criminales. Es conocido por su apariencia impecable, su naturaleza calculadora y su capacidad para ocultar su verdadera naturaleza bajo una fachada de respetabilidad. ',
    btn: 'Click para ver'
},
{
  image: 'El_seanor_de_los_anillos_La_comunidad_del_anillo-952398002-large.jpg',
  character: 'El Señor de los anillos la comunidad del amillo',
  text: 'Gus es un empresario de la droga y dueño de la cadena de restaurantes de pollo frito "Los Pollos Hermanos", que utiliza como fachada para sus actividades criminales. Es conocido por su apariencia impecable, su naturaleza calculadora y su capacidad para ocultar su verdadera naturaleza bajo una fachada de respetabilidad. ',
  btn: 'Click para ver'
},
{
image: 'El_seanor_de_los_anillos_Las_dos_torres-450612576-large.jpg',
character: 'El Señor de los anillos las dos torres',
text: 'Gus es un empresario de la droga y dueño de la cadena de restaurantes de pollo frito "Los Pollos Hermanos", que utiliza como fachada para sus actividades criminales. Es conocido por su apariencia impecable, su naturaleza calculadora y su capacidad para ocultar su verdadera naturaleza bajo una fachada de respetabilidad. ',
btn: 'Click para ver'
},
{
image: '71EVuWC5i0L._AC_UF894,1000_QL80_.jpg',
character: 'El Señor de los anillos el retorno del rey',
text: 'Gus es un empresario de la droga y dueño de la cadena de restaurantes de pollo frito "Los Pollos Hermanos", que utiliza como fachada para sus actividades criminales. Es conocido por su apariencia impecable, su naturaleza calculadora y su capacidad para ocultar su verdadera naturaleza bajo una fachada de respetabilidad. ',
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
