

export interface Livro {
  id:number;
  titulo: string;
  subtitulo:string;
  resumo: string;
  quantidadePaginas: number;
  dataPublicaca0:Date;
  edicao:number;
  editora:string;
  autores: Array<any>;
  quantidadeEstoque:number;

}
