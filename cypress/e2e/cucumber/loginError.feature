Feature: loginError

@probando
  Scenario Outline: Iniciando sesión con credenciales NO válidas
    Given Estoy en la página de inicio de usuario
    When Lleno los campos de <username> y <password> y hago click en Sign in
    Then Debería validar que el inicio de sesión no se ha completado
    Examples: 
|username | password|
|lc2oefvu | 9u918hyr|
|v6d7vahs | 5rgxp5sm|
|onn1c318 | nk7bac00|
|l04k2q2i | 3n0wviwt|
|qimqgrjd | ktgoq72m|
|666rqx77 | ziwy8io4|
|y7inemwl | 0sz0ugk7|
|t104sxxn | rvb9610h|
|tvjg62c5 | r2lbj8c8|
|14huqsth | 31bgl7wa|