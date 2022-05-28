## Notas

O arquivo [```criterios.json```](./config/criterios.json) contém um atributo booleano. Caso:

- Verdadeiro, toda tupla que estiver vinculada a tuplas de outras tabelas será deletada unanimemente;

- Falso, o método DELETE retornará uma lista de quais as tuplas vinculadas. Por exemplo: o adicional "creme de avelã" está vinculado ao açaí e ao sorvete. Ao tentar deletar este adicional, o método retornará os produtos que contêm creme de avelã.