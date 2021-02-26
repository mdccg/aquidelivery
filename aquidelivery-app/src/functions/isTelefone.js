function isTelefone(telefone) {
  const regExp = new RegExp(/^\+\d{2}\s\(\d{2}\)\s{1}\d{5}-\d{4}$/);
  return regExp.test(telefone);
}

export default isTelefone;