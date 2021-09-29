export class BaseController {
  get(db, id) {
    throw new Error('Não implementado');
  }

  getOne(db, args) {
    throw new Error('Não implementado');
  }

  list(db, args) {
    throw new Error('Não implementado');
  }

  create(db, input) {
    throw new Error('Não implementado');
  }

  update(db, input, id) {
    throw new Error('Não implementado');
  }

  delete(db, id) {
    throw new Error('Não implementado');
  }
}
