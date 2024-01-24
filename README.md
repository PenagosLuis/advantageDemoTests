# Automatización de Módulos en advantagedemoshopping con Página de Objetos (POM) en Cypress - Noviembre 2023

¡Saludos! Me llamo Luis Penagos y estoy emocionado de compartir cómo he implementado la automatización de los módulos en la página de aprendizaje www.advantageonlineshopping.com/ utilizando el enfoque de Página de Objetos (POM) en Cypress.

## Acerca del Proyecto

www.advantageonlineshopping.com/ es una plataforma de aprendizaje para automatización, diseñada para propósitos educativos. En este proyecto, he aplicado Cypress, una herramienta de automatización de pruebas, para garantizar la estabilidad y confiabilidad de los módulos críticos de la aplicación.

## Actualización a Noviembre de 2023

Es importante tener en cuenta que debido a la naturaleza cambiante de www.advantageonlineshopping.com/ he mantenido la automatización actualizada hasta noviembre de 2023. Esto implica adaptarse a las modificaciones constantes en la interfaz de usuario y en la lógica de la aplicación.

## Enfoque de Página de Objetos (POM)

La implementación se basa en el patrón POM, que promueve una estructura modular y mantenible para las pruebas de automatización. Cada página de la aplicación tiene su propio archivo de objeto que encapsula los elementos y acciones específicos de esa página.

## Ejemplos de Automatización

A continuación, se presentan algunos ejemplos de las acciones automatizadas utilizando Cypress y POM:

```javascript
// Ejemplo de acceso a la página de inicio
import HomePage from './pageObjects/HomePage';

describe('Pruebas en advantagedemoshopping', () => {
  const homePage = new HomePage();

  it('Iniciar sesión correctamente', () => {
    homePage.visit();
    homePage.login('usuario', 'contraseña');
    // Agregar validaciones según sea necesario
  });

  it('Agregar producto al carrito', () => {
    homePage.visit();
    homePage.buscarProducto('nombreProducto');
    homePage.agregarAlCarrito();
    // Agregar validaciones según sea necesario
  });
});
