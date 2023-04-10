Feature: login
  
  @probando
  Scenario: Iniciando sesión con credenciales válidas
    Given Estoy en la página de inicio
    When Lleno los campos de "TopGAndrewTate" y "bb310791HB." y hago click en Sign in
    Then Debería validar que la sesión se ha iniciado correctamente